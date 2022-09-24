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
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public getAll(): Promise<Product[]> {
    console.log('getall');
    return this.productsService.getAll();
  }

  @Get(':id')
  public getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  public create(@Body() CreateProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(CreateProductDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Put(':id')
  public update(
    @Body() UpdateProductDto: UpdateProductDto,
    @Param('id') id: string,
  ): Promise<Product> {
    return this.productsService.update(id, UpdateProductDto);
  }
}
