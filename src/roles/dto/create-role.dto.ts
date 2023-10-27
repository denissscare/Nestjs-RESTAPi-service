import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "admin", description: "User role" })
  @IsString({ message: "must be String" })
  readonly value: string;

  @ApiProperty({ example: "Administrator", description: "Role desription" })
  @IsString({ message: "must be String" })
  readonly description: string;
}
