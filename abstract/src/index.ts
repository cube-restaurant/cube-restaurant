import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';

import mikroOrmConfig from './config/mikro-orm.config';

export class DBAdapter {
  static async getConnection(): Promise<MikroORM<IDatabaseDriver<Connection>>> {
    const orm = await MikroORM.init(mikroOrmConfig);

    // Running Migrations
    const migrator = orm.getMigrator();
    await migrator.up();

    return orm;
  }
}

export * from './entities';
