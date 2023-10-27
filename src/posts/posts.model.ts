import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "../users/users.model";

interface PostCreationAtrs {
  image: string;
  title: string;
  content: string;
  userID: number;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAtrs> {
  @ApiProperty({ example: 1, description: "Unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "example title", description: "Title" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: "example content", description: "User content" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: "IMAGE", description: "Post Image" })
  @Column({
    type: DataType.STRING,
    defaultValue: false,
  })
  image: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userID: number;

  @BelongsTo(() => User)
  author: User;
}
