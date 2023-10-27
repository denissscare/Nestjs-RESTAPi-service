import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
  @IsNumber({}, { message: "must be Number" })
  readonly userID: number;

  @IsString({ message: "must be String" })
  readonly banReason: string;
}
