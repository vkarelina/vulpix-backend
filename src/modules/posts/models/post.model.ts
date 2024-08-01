import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

import { Tag } from './tag.model';
import { PostTag } from './post-tags.model';
import { User } from '../../../models/user.model';

interface PostCreactionAttrs {
  title: string;
  description: string;
  picture?: string;
}

@Table({ tableName: 'Posts', underscored: true })
export class Post extends Model<Post, PostCreactionAttrs> {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column({ type: DataType.TEXT })
  description: string;

  @AllowNull
  @Column
  picturePath?: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsToMany(() => Tag, () => PostTag)
  tags: Tag[];

  @BelongsTo(() => User)
  user: User;
}
