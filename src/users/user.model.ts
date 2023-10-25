import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface UserCreationAtrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAtrs> {
  @ApiProperty({ example: 1, description: "Unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: "user@gmail.com", description: "Email address" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string;

  @ApiProperty({ example: "verySecret", description: "Password" })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string;

  @ApiProperty({ example: false, description: "Ban status" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  isBan: boolean;

  @ApiProperty({ example: "Bad user", description: "Ban reason" })
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  banReason: string;
}
