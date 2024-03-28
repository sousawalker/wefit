import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddressesDto {
  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsOptional()
  complement: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  neighborhood: string;

  @IsNotEmpty()
  userId: string;
}
