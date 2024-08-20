import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Post } from './models/post.model';
import { Tag } from './models/tag.model';
import { PostTag } from './models/post-tags.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [SequelizeModule.forFeature([Post, Tag, PostTag])],
})
export class PostsModule {}
