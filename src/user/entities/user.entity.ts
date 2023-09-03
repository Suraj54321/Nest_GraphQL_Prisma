import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';
import { User as UserDB } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Int)
  id: UserDB['id'];

  @Field(() => String,{nullable:true})
  name:UserDB['name']

  @Field(() => String,{nullable:true})
  email:UserDB['email']

  @Field(()=> String,{nullable:true})
  password:UserDB['password']

  @Field(() => Boolean,{nullable:true})
  status:UserDB['status']

  @Field(() => GraphQLISODateTime)
  createdAt: UserDB[`createdAt`];

  @Field(() => GraphQLISODateTime)
  updatedAt: UserDB[`updatedAt`];
}
