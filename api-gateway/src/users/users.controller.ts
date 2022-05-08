import {Controller, Get, Header, Post, Body,} from '@nestjs/common'
import {User, UsersListResponse, UsersService} from './users.interface'
import {UsersServiceClientOptions} from "./user.options"
import {Client, ClientGrpc} from "@nestjs/microservices"

@Controller('users')
export class UserController {
    constructor() {
    }


    @Client(UsersServiceClientOptions)
    private readonly usersServiceClient: ClientGrpc

    private usersService: UsersService

    async onModuleInit() {
        this.usersService = this.usersServiceClient.getService<UsersService>('UsersService')
    }

    @Get()
    @Header('Content-Type', 'application/json')
    async findUsers(): Promise<UsersListResponse> {
        return await this.usersService.findAll(null)
    }

    @Post()
    @Header('Content-Type', 'application/json')
    async createUsers(@Body() input: User): Promise<User> {
        return await this.usersService.createUser(input)
    }

    @Post('update')
    @Header('Content-Type', 'application/json')
    async updateUsers(@Body() input: User): Promise<User> {
        return await this.usersService.updateUser(input)
    }

}
