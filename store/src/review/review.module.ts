// Core
import { Module } from '@nestjs/common';
// Controllers
import { ReviewController } from './review.controller';

@Module({
    controllers: [ReviewController],
})
export class ReviewModule {}
