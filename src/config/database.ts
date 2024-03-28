import { DataSource } from 'typeorm';
import { UsersEntity } from '../users/utils/users.entity';
import { AddressesEntity } from '../addressess/utils/addresses.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3300,
  username: 'root',
  password: '12345',
  database: 'wefit',
  entities: [UsersEntity, AddressesEntity],
  synchronize: true
});
