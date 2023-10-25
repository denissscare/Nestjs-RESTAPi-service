import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "email", description: "User email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "User password" })
  readonly password: string;
}
