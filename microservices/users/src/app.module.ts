import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import configuration from './configuration.config'
import {UsersModule} from './users/users.module'
import {postgresTypeOrmConfig} from "./db/typeorm.config"
import {TypeOrmModule} from "@nestjs/typeorm"

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            envFilePath: ['.env'],
        }),
        TypeOrmModule.forRootAsync(postgresTypeOrmConfig),
        UsersModule
    ]
})
export class AppModule {
}
