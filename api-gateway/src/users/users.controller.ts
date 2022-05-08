import {Controller, Get, Header, Post, Body,} from '@nestjs/common'
import {User, UsersList, UsersService} from './users.interface'

@Controller('users')
export class UserController {
    constructor() {
    }

    private usersService: UsersService

    @Get()
    @Header('Content-Type', 'application/json')
    async findUsers(): Promise<UsersList> {
        return await this.usersService.findAll(null)
    }

    @Post()
    @Header('Content-Type', 'application/json')
    async createUsers(@Body() input: User): Promise<User> {
        return await this.usersService.createUser(input)
    }

    @Post()
    @Header('Content-Type', 'application/json')
    async updateUsers(@Body() input: User): Promise<User> {
        return await this.usersService.updateUser(input)
    }

}
