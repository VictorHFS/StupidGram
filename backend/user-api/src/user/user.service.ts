import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>)
  {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  find(search: string): Promise<User[]>
  {
    return this.userRepository.find();
  }
  
  findOne(id: number): Promise<User| null>
  {
    return this.userRepository.findOneBy({id:id});
  }

  create(dto: CreateUserDTO): Promise<User> {
    
    var user = new User();
    user.name = dto.name;
    user.nickName = dto.nickName;
    user.password = dto.password;
    user.email = dto.email;
    return this.userRepository.save(user);
  }

  update(id: number, user: CreateUserDTO): Promise<User> {
    return this.userRepository.save(user);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete({id:id});
  }
  
  deleteAll(): Promise<DeleteResult> {
    return this.userRepository.delete('id != null')
  }
  
  async updatePicture(id: number, file: string): Promise<User> {
    var user = await this.userRepository.findOneBy({id:id});
    if (user)
    {
      user.picture =  file;
      return await this.userRepository.save(user);
    }

    throw 'User not found';
  }
}
