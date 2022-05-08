import {Injectable} from '@nestjs/common'

import {CreateUserRequest, FindAllRequest, User, UsersService} from './users.interface'
import {InjectRepository} from "@nestjs/typeorm"
import {UserModel} from "../db/typeorm-models/user.entity"
import {Repository} from "typeorm"


@Injectable()
export class UsersServiceImplement implements UsersService {
    constructor(@InjectRepository(UserModel) private userRepo: Repository<UserModel>,
    ) {
    }

    async findAll(input?: FindAllRequest): Promise<Array<UserModel>> {
        return await this.userRepo.find()
    }


    async createUser(input: CreateUserRequest): Promise<UserModel> {
        const user = new UserModel()
        user.name = input.name
        await this.userRepo.save(user)
        return user
    }


    async updateUser(input: UserModel): Promise<UserModel> {
        const user = await this.userRepo.findOne({
            where: {
                id: input.id
            }
        })
        user.name = input.name
        await this.userRepo.save(user)
        return user
    }

}
