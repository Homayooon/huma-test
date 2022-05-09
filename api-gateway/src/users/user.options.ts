import {ClientOptions, Transport} from '@nestjs/microservices'
import {join} from 'path'

export const UsersServiceClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: `${(process.env.USERS_SERVICE_URL || 'localhost')}:${(process.env.USERS_SERVICE_PORT || '50052')}`,
        package: 'users',
        protoPath: join(__dirname, '../_proto/users.proto'),
        loader: {
            enums: String,
            objects: true,
            arrays: true
        }
    }
};

