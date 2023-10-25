import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAtrs {
  value: string;
  description: string;

}

@Table({ tableName: "roles" })
export class Roles extends Model<Roles, RoleCreationAtrs> {
  @ApiProperty({ example: 1, description: "Unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "Role" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @ApiProperty({ example: "Administrator", description: "Role description" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
