import {Module} from '@nestjs/common'

import {UsersController} from './users.controller'
import {UsersServiceImplement} from "./users.service"

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [{
        provide: 'UsersService', useClass: UsersServiceImplement
    }]
})
export class UsersModule {
}
