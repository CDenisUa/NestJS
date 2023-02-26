// Core
import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
