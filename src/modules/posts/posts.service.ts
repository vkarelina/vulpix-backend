import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../users/models/user.model';
import { Post } from './models/post.model';
import { Tag } from './models/tag.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async getAllPosts() {
    const posts = await this.postRepository.findAll({
      attributes: { exclude: ['updatedAt', 'createdAt'] },
      include: [
        {
          model: User,
          attributes: ['id', 'login', 'email', 'avatarPath'],
        },
        {
          model: Tag,
          attributes: ['id', 'name'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!posts) throw new NotFoundException('Error: Not found posts');

    return posts;
  }
}
