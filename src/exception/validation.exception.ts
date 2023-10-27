import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {
  message;

  constructor(res) {
    super(res, HttpStatus.BAD_REQUEST);
    this.message = res;
  }
}
