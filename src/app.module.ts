import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Dialect } from 'sequelize';

import { User } from './models/user.model';
import { Post } from './modules/posts/models/post.model';
import { Tag } from './modules/posts/models/tag.model';
import { PostTag } from './modules/posts/models/post-tags.model';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: process.env.DB_DIALECT as Dialect,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Post, Tag, PostTag],
    }),
    PostsModule,
  ],
})
export class AppModule {}
