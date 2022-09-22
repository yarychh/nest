import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public getAll(): any {
    console.log('getall');
    return this.productsService.getAll();
  }

  @Get(':id')
  public getOne(@Param('id') id: string): any {
    return this.productsService.getById(id);
  }

  @Post()
  public create(@Body() CreateProductDto: CreateProductDto): any {
    return this.productsService.create(CreateProductDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): string {
    return 'success' + id;
  }

  @Put(':id')
  public update(
    @Body() UpdateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): string {
    return 'update: ' + UpdateProductDto.toString() + id;
  }
}
