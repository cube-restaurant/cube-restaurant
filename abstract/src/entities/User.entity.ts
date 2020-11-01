import { Entity, Enum, Index, Property } from '@mikro-orm/core';
import { BaseEntity } from './Base.entity';

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
export class UserEntity extends BaseEntity {
  @Property()
  firstName!: String;

  @Property()
  lastName!: String;

  @Property()
  @Index()
  email!: String;

  @Property()
  password!: String;

  @Property({ nullable: false, default: false })
  isVerified: Boolean = false;

  @Enum({ type: 'UserRoles', default: UserRoles.USER })
  role!: UserRoles;

  @Enum({ type: 'UserStatus', default: UserStatus.ENABLED })
  status!: UserStatus;
}
