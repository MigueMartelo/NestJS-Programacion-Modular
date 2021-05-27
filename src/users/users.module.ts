import { Module } from '@nestjs/common';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';

@Module({
  providers: [CustomersService, UsersService],
  controllers: [UsersController, CustomersController],
})
export class UsersModule {}
