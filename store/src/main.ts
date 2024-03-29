// Core
import { NestFactory } from '@nestjs/core';
// Modules
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');
    await app.listen(8080);
}
bootstrap();
