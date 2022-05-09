import {NestFactory} from '@nestjs/core'
import {Transport} from '@nestjs/microservices'
import {AppModule} from './app.module'
import {join} from 'path'
import config from './configuration.config';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.GRPC,
        options: {
            url: `${config().httpHost}:${config().httpPort}`,
            package: 'users',
            protoPath: join(__dirname, './_proto/users.proto'),
            loader: {
                enums: String,
                objects: true,
                arrays: true
            }
        }
    })

    return app.listen()
}

bootstrap()
