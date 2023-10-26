import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { Roles } from "./roles.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Roles) private roleRepository: typeof Roles) {}
  async createRole(dto: CreateRoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRoleByValue(value: string) {
    return await this.roleRepository.findOne({ where: { value } });
  }
}
