const { SnakeNamingStrategy } = require('typeorm-naming-strategies');

module.exports = {
  type: 'postgres',
  host: 'motty.db.elephantsql.com',
  port: 5432,
  username: 'mxvtlpnw',
  password: 'YN5D0wMH7hshIqxrRUgSztbO0SGPpZB9',
  database: 'mxvtlpnw',
  logging: true,
  entities: ['src/data/entities/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    entitiesDir: 'src/data/entities',
    migrationsDir: 'src/database/migrations',
  },
};
