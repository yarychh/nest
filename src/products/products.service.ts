import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  public getAll() {
    return this.products;
  }

  public getById(id: string) {
    return this.products.find((product) => {
      product.id === id;
    });
  }

  public create(productDto: CreateProductDto) {
    return this.products.push({ ...productDto, id: Date.now().toString() });
  }
}
