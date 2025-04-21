// Core
import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { TaskModule } from './task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
