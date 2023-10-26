import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "admin", description: "User role" })
  readonly value: string;

  @ApiProperty({ example: "Administrator", description: "Role desription" })
  readonly description: string;
}
