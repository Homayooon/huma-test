import {Module} from '@nestjs/common'

import {UsersController} from './users.controller'
import {UsersServiceImplement} from "./users.service"
import {TypeOrmModule} from "@nestjs/typeorm"
import {UserModel} from "../db/typeorm-models/user.entity"

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserModel
        ])
    ],
    controllers: [UsersController],
    providers: [{
        provide: 'UsersService', useClass: UsersServiceImplement
    }]
})
export class UsersModule {
}
