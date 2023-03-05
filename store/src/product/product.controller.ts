// Core
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
// Models
import { ProductModel } from './product.model/product.model';

@Controller('product')
export class ProductController {
    @Get(':id')
    async get(@Param('id') id: string) {
        return id;
    }

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
        return dto;
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindProductDto) {
        return dto;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: ProductModel) {
        return [id, dto];
    }
}
