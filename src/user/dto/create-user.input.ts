import { Field, InputType} from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsEmpty, IsNotEmpty, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @MaxLength(20)
  name:string

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsNotEmpty()
  password: string;
}
