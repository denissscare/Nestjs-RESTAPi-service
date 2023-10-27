import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "email", description: "User email" })
  @IsString({ message: "Must be String" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @ApiProperty({ example: "password", description: "User password" })
  @IsString({ message: "Must be String" })
  @Length(6, 20, {
    message:
      "The password must contain at least 6 characters and no more than 20",
  })
  readonly password: string;
}
