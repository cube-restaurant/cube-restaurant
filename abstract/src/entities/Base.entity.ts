import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ abstract: true })
export class BaseEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  uuid!: String;

  @Property({ type: 'date', nullable: false })
  createdAt: Date = new Date();

  @Property({ type: 'date', onUpdate: () => new Date(), nullable: false })
  updatedAt: Date = new Date();
}
