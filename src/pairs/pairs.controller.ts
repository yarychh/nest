/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePassPairDto } from './dto/create-pair.dto';
import { UpdatePassPairDto } from './dto/update-pair.dto';
import { PairsService } from './pairs.service';
import { Pair } from './schemas/pair.schema';

@Controller('pairs')
export class PairsController {
  constructor(private pairsService: PairsService) {}

  @Get()
  public getAll(): Promise<Pair[]> {
    return this.pairsService.getAll();
  }

  @Get(':id')
  public getOne(@Param('id') id: string): Promise<Pair[]> {
    return this.pairsService.getPairsByUserId(id);
  }

  @Post()
  public create(@Body() CreatePassPairDto: CreatePassPairDto): Promise<Pair> {
    return this.pairsService.create(CreatePassPairDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<Pair> {
    return this.pairsService.remove(id);
  }

  @Put(':id')
  public update(
    @Body() UpdatePassPairDto: UpdatePassPairDto,
    @Param('id') id: string,
  ): Promise<Pair> {
    return this.pairsService.update(id, UpdatePassPairDto);
  }
}
