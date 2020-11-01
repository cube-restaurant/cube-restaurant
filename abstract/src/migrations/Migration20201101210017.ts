import { Migration } from '@mikro-orm/migrations';

export class Migration20201101210017 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user_entity" ("uuid" uuid not null default uuid_generate_v4(), "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "is_verified" bool not null default false, "role" text check ("role" in (\'user\', \'moderators\', \'chefs\', \'admin\')) not null default \'user\', "status" text check ("status" in (\'enabled\', \'disabled\', \'deleted\')) not null default \'enabled\');'
    );
    this.addSql(
      'alter table "user_entity" add constraint "user_entity_pkey" primary key ("uuid");'
    );
    this.addSql('create index "user_entity_email_index" on "user_entity" ("email");');
  }
}
