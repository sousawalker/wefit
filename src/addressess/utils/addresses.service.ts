import { AppDataSource } from '../../config/database';
import { AddressesEntity } from '../utils/addresses.entity';
import { AddressesDto } from './addresses.dto';

export class AddressesService {
  private addressesRepository: any;

  constructor() {
    this.addressesRepository = AppDataSource.getRepository(AddressesEntity);
  }

  async createAddresses(addressData: AddressesDto): Promise<AddressesEntity> {
    const { zip, street, number, complement, neighborhood, city, state, userId } = addressData;

    const address = new AddressesEntity();

    address.zip = zip;
    address.street = street;
    address.number = number;
    address.complement = complement;
    address.neighborhood = neighborhood;
    address.city = city;
    address.state = state;
    address.userId = userId;

    await this.addressesRepository.save(address);

    return address;
  }

  async getAddressesById(id: string): Promise<AddressesEntity | null> {
    const address = await this.addressesRepository.findOneBy({ id });

    return address;
  }

  async updateAddresses(id: string, addressData: AddressesDto): Promise<AddressesEntity | null> {
    const address = await this.addressesRepository.findOneBy({ id });

    if (address) {
      this.addressesRepository.merge(address, addressData);

      await this.addressesRepository.save(address);
    }

    return address;
  }

  async deleteAddresses(id: string): Promise<void> {
    await this.addressesRepository.delete(id);
  }
}
