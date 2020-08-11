import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'this actions returns coffees';
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this actions returns #${id} coffee`;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return body;
    }
}
