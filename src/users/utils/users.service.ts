import { AppDataSource } from "../../config/database";
import { UsersEntity } from "../utils/users.entity";
import { UsersDto } from "./users.dto";

export class UsersService {
  private userRepository: any;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UsersEntity);
  }

  async createUsers(userData: UsersDto): Promise<UsersEntity> {
    const { name, email, cnpj, cpf, cellphone, phone } = userData;

    const user = new UsersEntity();

    user.name = name;
    user.email = email;
    user.cnpj = cnpj;
    user.cpf = cpf;
    user.cellphone = cellphone;
    user.phone = phone;
    user.created = new Date();

    await this.userRepository.save(user);

    return user;
  }

  async getUsersById(id: string): Promise<UsersEntity | null> {
    const user = await this.userRepository.findOneBy({ id });

    return user;
  }

  async updateUsers(id: string, userData: UsersDto): Promise<UsersEntity> {
    let user = await this.userRepository.findOneBy({ id });

    if (user) {
      this.userRepository.merge(user, userData);

      await this.userRepository.save(user);
    }

    return user;
  }

  async deleteUsers(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
