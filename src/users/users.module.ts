import { User } from "./user.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UsersModule {}
