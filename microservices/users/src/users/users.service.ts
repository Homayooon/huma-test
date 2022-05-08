import {Injectable} from '@nestjs/common'

import {CreateUserRequest, FindAllRequest, User, UsersList, UsersService} from './users.interface'


@Injectable()
export class UsersServiceImplement implements UsersService {

    private users: UsersList = {
        data: [
            {
                id: 1, name: "Ali"
            },
            {
                id: 2, name: "Hamid"
            },
        ]
    }

    findAll(input?: FindAllRequest): Promise<UsersList> {
        return Promise.resolve(this.users);
    }


    createUser(input: CreateUserRequest): Promise<User> {
        return Promise.resolve(undefined);
    }

    updateUser(input: User): Promise<User> {
        return Promise.resolve(undefined);
    }


}
