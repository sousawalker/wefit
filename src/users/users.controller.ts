import { Request, Response } from 'express';
import { UsersService } from './utils/users.service';

export class UsersController {

  private usersService: UsersService

  constructor() {
    this.usersService = new UsersService();
  }

  async createUsers(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.usersService.createUsers(req.body);

      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user: ", error);

      return res.status(500).json({ message: 'Error creating user' });
    }
  }

  async getUsersById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.usersService.getUsersById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user: ", error);

      return res.status(500).json({ message: 'Error fetching user' });
    }
  }

  async updateUsers(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.usersService.getUsersById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const updatedUsers = await this.usersService.updateUsers(req.params.id, req.body);

      return res.status(200).json(updatedUsers);
    } catch (error) {
      console.error("Error updating user: ", error);

      return res.status(500).json({ message: 'Error updating user' });
    }
  }

  async deleteUsers(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.usersService.getUsersById(req.params.id);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      await this.usersService.deleteUsers(req.params.id);

      return res.status(200).send({ message: "User deleted" });
    } catch (error) {
      console.error("Error deleting user: ", error);

      return res.status(500).json({ message: 'Error deleting user' });
    }
  }
}
