import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import { DeleteResult } from 'typeorm';
import { CreateUserDTO } from './create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("find")
  find(search: string): Promise<User[]> {
    return this.userService.find(search);
  }
  @Get("find/:id")
  findOne(@Param() param: any): Promise<User|null> {
    return this.userService.findOne(param.id as number);
  }
  @Delete('delete/:id')
  delete(@Param() param: any): Promise<DeleteResult>
  {
    return this.userService.delete(param.id);
  }
  
  @Delete('all')
  deleteAll(): Promise<DeleteResult> {
    return this.userService.deleteAll();
  }

  @Put('update/:id')
  update(@Param() params: any, @Body() user: CreateUserDTO): Promise<User>
  {
    return this.userService.update(params.id, user);
  }
  
  @Put('picture/:id')
  @UseInterceptors(
    FileInterceptor(
      'file',
      {limits: { fileSize: Math.pow(1024, 2) * 1}}
    )
  )
  updatePicture(@Param() params: any, @UploadedFile() file: string): Promise<User>
  {
    return this.userService.updatePicture(params.id, file);
  }
  
  @Post()
  create(@Body() user: CreateUserDTO): Promise<User>
  {
    return this.userService.create(user);
  }
}
