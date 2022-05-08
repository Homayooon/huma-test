import {Body, Controller, Get, Inject} from '@nestjs/common'
import {GrpcMethod} from '@nestjs/microservices'
import {User, UserListResponse, UsersService} from "./users.interface"
import {UserModel} from "../db/typeorm-models/user.entity"


@Controller()
export class UsersController {
    constructor(@Inject('UsersService') private readonly usersService: UsersService,) {
    }

    @GrpcMethod('UsersService', 'findAll')
    async findAll(): Promise<UserListResponse> {

        const result = await this.usersService.findAll()
        return {
            data: result
        }
    }

    @GrpcMethod('UsersService', 'createUser')
    async createUser(@Body() input: User): Promise<UserModel> {
        return await this.usersService.createUser(input)
    }

    @GrpcMethod('UsersService', 'updateUser')
    async updateUser(@Body() input: User): Promise<UserModel> {
        return await this.usersService.updateUser(input)
    }




}
