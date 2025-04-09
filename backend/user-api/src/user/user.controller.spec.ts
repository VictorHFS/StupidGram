import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
    userController.deleteAll();
  });

  describe('create', () => {
    it('should return "Hello World!"', async () => {
      var u = new User();
      u.name = 'Cleiton';
      u.nickName = 'clecle09';
      u.password = 'random';
      u.picture = 'asdfg';
      var response = await userController.create(u);

      expect(response.name).toBe(u.name);
      expect(response.nickName).toBe(u.nickName);
      expect(response.password).toBe(u.password);
      expect(response.picture).toBe(u.picture);
      expect(response.id).not.toBeNull();
    });
  });
});
