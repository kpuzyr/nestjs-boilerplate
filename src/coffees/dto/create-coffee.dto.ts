import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCoffeeDto {
    @ApiProperty({ description: 'The name of the coffee.'})
    @IsString()
    readonly name: string;

    @ApiProperty({ description: 'The name of the coffee brand'})
    @IsString()
    readonly brand: string;

    @ApiProperty({ description: 'The list of coffee flavors', example: ['vanilla', 'cocos']})
    @IsString({ each: true })
    readonly flavors: string[];
}
