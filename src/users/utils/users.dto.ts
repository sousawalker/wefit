import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UsersDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  cnpj: string;

  @IsOptional()
  cpf: string;

  @IsOptional()
  cellphone: string;

  @IsOptional()
  phone: string;
}
