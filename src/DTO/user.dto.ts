import {IsNotEmpty, IsEmail,IsString} from 'class-validator'


export class addUser{
    @IsNotEmpty({ message: `Please fill name field` })
    name: string;
  
    @IsNotEmpty({ message: `Please fill age field` })
    age: number;
  
    @IsNotEmpty({ message: `Please fill email field` })
    @IsEmail({message:`please Enter Valid Email`})
    email: string;
  
    @IsNotEmpty({ message: `Please fill password field` })
    password: string;
}

export class find{
    @IsNotEmpty({ message: `Please fill email field` })
    @IsEmail({message:`please Enter Valid Email`})
    email: string;
}

export class update{
    @IsNotEmpty({ message: `Please fill name field` })
    name: string;
  
    @IsNotEmpty({ message: `Please fill age field` })
    age: number;
  
    @IsNotEmpty({ message: `Please fill email field` })
    @IsEmail({message:`please Enter Valid Email`})
    email: string;
  
    @IsNotEmpty({ message: `Please fill password field` })
    password: string;
}