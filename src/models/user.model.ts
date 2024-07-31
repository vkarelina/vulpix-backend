import {
  AllowNull,
  Column,
  CreatedAt,
  HasMany,
  Model,
  Table,
  Unique,
  UpdatedAt,
} from 'sequelize-typescript';

import { Post } from '../modules/posts/models/post.model';

interface UserCreactionAttrs {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

@Table({ tableName: 'Users', underscored: true })
export class User extends Model<User, UserCreactionAttrs> {
  @AllowNull(false)
  @Column
  login: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull
  @Column
  avatarPath?: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => Post)
  posts: Post[];
}
