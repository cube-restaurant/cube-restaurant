/* eslint-disable import/first */
import 'reflect-metadata';

import dotenv from 'dotenv';

const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw new Error(dotenvResult.error.message);
}

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { MikroORM } from '@mikro-orm/core/MikroORM';

import { HelloResolver } from './resolvers/hello.resolvers';
import { __PORT__ } from './constants';
import { User } from './entities/User.entity';
import mikroOrmConfig from './mikro-orm.config';

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);

  // Running Migrations
  const migrator = orm.getMigrator();
  await migrator.up();

  const user = orm.em.create(User, {
    firstName: 'Coding',
    lastName: 'fun',
    email: 'admin@codingwith.fun',
    password: 'afeifbas',
  });
  await orm.em.persistAndFlush(user);

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(__PORT__, () => {
    console.log(`Suecessfully started express app on http://localhost:${__PORT__}`);
  });
};

main();
