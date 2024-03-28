import { Router } from 'express';
import { UsersController } from '../users/users.controller';
import { validateDto } from '../validate.middleware';
import { UsersDto } from '../users/utils/users.dto';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/', validateDto(UsersDto), (req, res) => usersController.createUsers(req, res));

usersRouter.get('/:id', (req, res) => usersController.getUsersById(req, res));

usersRouter.put('/:id', validateDto(UsersDto), (req, res) => usersController.updateUsers(req, res));

usersRouter.delete('/:id', (req, res) => usersController.deleteUsers(req, res));

export { usersRouter };
