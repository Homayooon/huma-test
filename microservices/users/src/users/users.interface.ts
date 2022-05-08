import {UserModel} from "../db/typeorm-models/user.entity"

export interface User {
    id: number
    name: string
}

export interface FindAllRequest {
}

export interface CreateUserRequest {
    name: string
}

export interface UserListResponse {
    data: Array<UserModel>
}

export interface UsersService {
    findAll(input?: FindAllRequest): Promise<Array<UserModel>>
    createUser(input: CreateUserRequest): Promise<UserModel>
    updateUser(input: UserModel): Promise<UserModel>

}


