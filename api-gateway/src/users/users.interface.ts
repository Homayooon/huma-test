
export interface User {
    id: number
    name: string
}

export interface UsersListResponse {
    data: Array<User>
}

export interface FindAllRequest {
}

export interface CreateUserRequest {
    name: string
}


export interface UsersService {
    findAll(input?: FindAllRequest): Promise<UsersListResponse>
    createUser(input: CreateUserRequest): Promise<User>
    updateUser(input: User): Promise<User>

}


