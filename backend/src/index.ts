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

import { HelloResolver } from './resolvers/hello.resolvers';
import { __PORT__ } from './constants';

const main = async () => {
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
