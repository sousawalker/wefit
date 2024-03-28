import { Request, Response } from 'express';
import { AddressesService } from './utils/addresses.service';

export class AddressesController {

  private addressesService: AddressesService

  constructor() {
    this.addressesService = new AddressesService();
  }

  async createAddresses(req: Request, res: Response): Promise<Response> {
    try {
      const address = await this.addressesService.createAddresses(req.body);

      return res.status(201).json(address);
    } catch (error) {
      console.error("Error creating address: ", error);

      return res.status(500).json({ message: 'Error creating address' });
    }
  }

  async getAddressesById(req: Request, res: Response): Promise<Response> {
    try {
      const address = await this.addressesService.getAddressesById(req.params.id);

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }

      return res.status(200).json(address);
    } catch (error) {
      console.error("Error fetching address: ", error);

      return res.status(500).json({ message: 'Error fetching address' });
    }
  }

  async updateAddresses(req: Request, res: Response): Promise<Response> {
    try {
      const address = await this.addressesService.getAddressesById(req.params.id);

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }

      const updatedAddress = await this.addressesService.updateAddresses(req.params.id, req.body);

      return res.status(200).json(updatedAddress);
    } catch (error) {
      console.error("Error updating address: ", error);

      return res.status(500).json({ message: 'Error updating address' });
    }
  }

  async deleteAddresses(req: Request, res: Response): Promise<Response> {
    try {
      const address = await this.addressesService.getAddressesById(req.params.id);

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }

      await this.addressesService.deleteAddresses(req.params.id);

      return res.status(200).send({ message: "Address deleted" });
    } catch (error) {
      console.error("Error deleting address: ", error);

      return res.status(500).json({ message: 'Error deleting address' });
    }
  }
}
