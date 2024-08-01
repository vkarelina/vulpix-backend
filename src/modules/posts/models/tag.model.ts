import {
  AllowNull,
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { Post } from './post.model';
import { PostTag } from './post-tags.model';

interface TagCreactionAttrs {
  name: string;
}

@Table({ tableName: 'Tags', underscored: true })
export class Tag extends Model<Tag, TagCreactionAttrs> {
  @AllowNull(false)
  @Column
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsToMany(() => Post, () => PostTag)
  posts: Post[];
}
