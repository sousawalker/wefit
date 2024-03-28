import { Router } from 'express';
import { usersRouter } from './users.routes';
import { addressesRouter } from './addresses.routes';

const router = Router();

router.use('/users', usersRouter);

router.use('/addresses', addressesRouter);

export default router;
