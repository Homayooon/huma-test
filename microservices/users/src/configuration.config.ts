export default () => ({
    httpHost: 'localhost',
    httpPort: process.env.HTTP_PORT || 3000,
    postgresTypeOrm: {
        host: process.env.POSTGRES_TYPEORM_HOST || 'localhost',
        username: process.env.POSTGRES_TYPEORM_USERNAME || 'postgres',
        password: process.env.POSTGRES_TYPEORM_PASSWORD || 'postgres',
        database: process.env.POSTGRES_TYPEORM_DATABASE || 'huma_test',
        port: process.env.POSTGRES_TYPEORM_PORT || 5432,
        synchronize: false,  // true → Development | false → Production
    },

});
