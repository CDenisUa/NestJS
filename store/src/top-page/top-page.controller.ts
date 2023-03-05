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
// DTO
import { FindTopPageDto } from './dto/find-top-page.dto';
// Models
import { TopPageModel } from './top-page.model/top-page.model';

@Controller('top-page')
export class TopPageController {
    @Get(':id')
    async get(@Param('id') id: string) {
        return id;
    }

    @Post('create')
    async create(@Body() dto: Omit<TopPageModel, '_id'>) {
        return dto;
    }

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindTopPageDto) {
        return dto;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return id;
    }

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
        return [id, dto];
    }
}
