import { Router } from 'express';
import { AddressesController } from '../addressess/addresses.controller';
import { validateDto } from '../validate.middleware';
import { AddressesDto } from '../addressess/utils/addresses.dto';

const addressesRouter = Router();
const addresses = new AddressesController();

addressesRouter.post('/', validateDto(AddressesDto), (req, res) => addresses.createAddresses(req, res));

addressesRouter.get('/:id', (req, res) => addresses.getAddressesById(req, res));

addressesRouter.put('/:id', validateDto(AddressesDto), (req, res) => addresses.updateAddresses(req, res));

addressesRouter.delete('/:id', (req, res) => addresses.deleteAddresses(req, res));

export { addressesRouter };
