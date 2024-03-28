import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validateDto(dtoClass: any) {
  return function (req: Request, res: Response, next: NextFunction) {
    const instance = plainToInstance(dtoClass, req.body);

    validate(instance, { skipMissingProperties: false }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const dtoErrors = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');

        res.status(400).json({ message: dtoErrors });
      } else {
        next();
      }
    });
  };
}
