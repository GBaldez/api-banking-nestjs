import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;
  @IsString()
  readonly lastName: string;
  @IsNumber()
  readonly cpf: number;
  @IsEmail()
  email: string;
  @IsString()
  address: string;
  @IsNumber()
  phone: number;
  @IsString()
  password: number;
}
