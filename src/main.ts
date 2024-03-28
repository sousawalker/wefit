import express from 'express';
import { AppDataSource } from './config/database';
import routes from './routes';

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => { console.log(`Server running on port ${PORT} and tables are updated.`); });
}).catch((error) => console.log(error));
