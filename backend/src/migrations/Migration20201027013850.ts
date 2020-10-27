import { Migration } from '@mikro-orm/migrations';

export class Migration20201027013850 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("uuid" uuid not null default uuid_generate_v4(), "first_name" varchar(255) not null, "last_name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "is_verified" bool not null, "role" text check ("role" in (\'user\', \'moderators\', \'chefs\', \'admin\')) not null, "status" text check ("status" in (\'enabled\', \'disabled\', \'deleted\')) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);'
    );
    this.addSql('alter table "user" add constraint "user_pkey" primary key ("uuid");');
    this.addSql('create index "user_email_index" on "user" ("email");');
  }
}
