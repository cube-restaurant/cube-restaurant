import 'dotenv/config';
import path from 'path';
import { MikroORM } from '@mikro-orm/core';
import {
  __DEV_DB_NAME__,
  __DEV_DB_PASSWORD__,
  __DEV_DB_USERNAME__,
  __DEV_DB_HOST__,
  __PROD_DB_HOST__,
  __IS_PROD__,
  __TEST_DB_HOST__,
  __TEST_DB_NAME__,
  __TEST_DB_PASSWORD__,
  __TEST_DB_USERNAME__,
  __PROD_DB_NAME__,
  __PROD_DB_USERNAME__,
} from '../utils/constants.util';
import { UserEntity } from '../entities';
import { BaseEntity } from '../entities/Base.entity';

interface DatabaseProfile {
  user?: String;
  password?: String;
  dbName?: String;
  host?: String;
  port?: Number;
}

const testing: DatabaseProfile = {
  user: __TEST_DB_USERNAME__,
  password: __TEST_DB_PASSWORD__,
  dbName: __TEST_DB_NAME__,
  host: __TEST_DB_HOST__,
  port: 5432,
};

const local: DatabaseProfile = {
  user: __DEV_DB_USERNAME__,
  password: __DEV_DB_PASSWORD__,
  dbName: __DEV_DB_NAME__,
  host: __DEV_DB_HOST__,
  port: 5432,
};

const production: DatabaseProfile = {
  user: __PROD_DB_NAME__,
  password: __PROD_DB_USERNAME__,
  dbName: __PROD_DB_NAME__,
  host: __PROD_DB_HOST__,
  port: 5432,
};

export const profile = (): DatabaseProfile => {
  switch (process.env.NODE_ENV) {
    case 'testing':
      return testing;
    case 'development':
      return local;
    case 'production':
      return production;
    default:
      return local;
  }
};

export default {
  migrations: {
    path: path.join(__dirname, '../migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    tableName: 'migrations',
    transactional: true,
  },
  ...profile(),
  tsNode: !__IS_PROD__,
  // entitiesTs: ['src/entities/**/*.ts'],
  // entities: ['src/entities/**/*.js'],
  entities: [BaseEntity, UserEntity],
  type: 'postgresql',
  debug: !__IS_PROD__,
} as Parameters<typeof MikroORM.init>[0];
