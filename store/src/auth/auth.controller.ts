import { AuthDto } from './dto/auth.dto';
// Core
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post('register')
    async register(@Body() dto: AuthDto) {
        return dto;
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        return dto;
    }
}
