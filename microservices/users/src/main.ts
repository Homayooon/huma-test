import { join } from 'path'

import { NestFactory } from '@nestjs/core'
import { Transport } from '@nestjs/microservices'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50052',
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
