import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
  @IsString({ message: "must be String" })
  readonly value: string;

  @IsNumber({}, { message: "must be number" })
  readonly userID: number;
}
