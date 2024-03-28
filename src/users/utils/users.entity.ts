import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { AddressesEntity } from '../../addressess/utils/addresses.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ nullable: true })
  phone: string;

  @Column("timestamp")
  created: Date;

  @OneToOne(() => AddressesEntity, address => address.user, { eager: true, cascade: true })
  address: AddressesEntity;
}
