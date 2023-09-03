import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Prisma} from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma:PrismaService){}
  async create(createUserInput: CreateUserInput){
    try {
      let user = createUserInput
      const emailExists=await this.prisma.user.findUnique({
        where:{
          email:user.email
        }
      })
      if(emailExists == null){
        let dataCreated=await this.prisma.user.create({
          data:user
        })
        return dataCreated
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where:{
        id:id
      }
    })
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return await this.prisma.user.update({
      where:{
        id:id
      },
      data:updateUserInput
    }) 
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where:{
        id:id
      }
    }) 
  }
}
