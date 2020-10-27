import { Entity, Enum, Index, PrimaryKey, Property } from '@mikro-orm/core';

export enum UserRoles {
  USER = 'user',
  MODERATORS = 'moderators',
  CHEFS = 'chefs',
  ADMIN = 'admin',
}

// TODO: Create cron-job repo to delete users periodically
export enum UserStatus {
  ENABLED = 'enabled',
  DISABLED = 'disabled',
  DELETED = 'deleted',
}

@Entity()
export class User {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  uuid!: String;

  @Property()
  firstName!: String;

  @Property()
  lastName!: String;

  @Property()
  @Index()
  email!: String;

  @Property()
  password!: String;

  @Property({ nullable: false })
  isVerified: Boolean = false;

  @Enum({ type: 'UserRoles', nullable: false })
  role = UserRoles.USER;

  @Enum({ type: 'UserStatus', nullable: false })
  status = UserStatus.ENABLED;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}
