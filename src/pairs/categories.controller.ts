import { Controller, Get, Param } from '@nestjs/common';
import { PairsService } from './pairs.service';

@Controller('categories')
export class CategoriesController {
  constructor(private pairsService: PairsService) {}

  @Get(':id')
  getUsersCategories(@Param('id') id: string): Promise<string[]> {
    return this.pairsService.getUsersCategories(id);
  }
}
