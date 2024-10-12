import { Controller, Get, Query } from '@nestjs/common';
import { FilterQuery as GenderFilter } from './types';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller({
  path: 'products',
  version: '1',
})
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get outfit by gender' })
  @ApiQuery({
    name: 'query',
    required: false,
    description: 'Query filter for the outfit',
    enum: ['MEN', 'WOMEN', 'ALL'],
  })
  public async getOutfitAsync(@Query('query') query?: GenderFilter) {
    return await this.productsService.getOutfitAsync(query ?? 'ALL');
  }
}
