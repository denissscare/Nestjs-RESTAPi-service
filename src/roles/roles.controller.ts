import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Roles } from "./roles.model";

@Controller("roles")
export class RolesController {
  constructor(private roleService: RolesService) {}
  @ApiOperation({ summary: "Create user role" })
  @ApiResponse({ status: 201, type: Roles })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: "Get user role by value" })
  @ApiResponse({ status: 200, type: Roles })
  @Get("/:value")
  getRoleByValue(@Param("value") value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
