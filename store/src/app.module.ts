// Core
import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { AuthModule } from './auth/auth.module';
import { TopPageModule } from './top-page/top-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';

@Module({
    imports: [AuthModule, TopPageModule, ProductModule, ReviewModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
