import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Post } from './post.model';
import { Tag } from './tag.model';

@Table({ tableName: 'PostTags', timestamps: false })
export class PostTag extends Model<PostTag> {
  @ForeignKey(() => Post)
  @Column
  postId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}
