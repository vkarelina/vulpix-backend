import { Controller, Get } from '@nestjs/common';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    const posts = this.postsService.getAllPosts();
    return posts;
  }
}
