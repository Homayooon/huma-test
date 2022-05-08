import {Controller, Inject} from '@nestjs/common'
import {GrpcMethod} from '@nestjs/microservices'
import {User, UsersList, UsersService} from "./users.interface"


@Controller()
export class UsersController {
    constructor(@Inject('UsersService') private readonly usersService: UsersService,) {
    }

    @GrpcMethod('UsersService', 'findAll')
    async findAll(): Promise<UsersList> {

        return await this.usersService.findAll()
    }
}
