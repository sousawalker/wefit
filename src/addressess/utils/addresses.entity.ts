import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UsersEntity } from '../../users/utils/users.entity';

@Entity('addresses')
export class AddressesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  zip: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  neighborhood: string;

  @Column("uuid")
  userId: string;

  @OneToOne(() => UsersEntity, user => user.address, { eager: false })
  @JoinColumn()
  user: UsersEntity;
}
