// Core
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// Models
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
    @Get('byProduct/:productId')
    async getByProduct(@Param('productId') productId: string) {
        return productId;
    }

    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {
        return dto;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }
}
