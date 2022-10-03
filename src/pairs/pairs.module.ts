/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PairsController } from './pairs.controller';
import { PairsService } from './pairs.service';
import { Pair, PairScema } from './schemas/pair.schema';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pair.name, schema: PairScema, collection: 'pairs' },
    ]),
  ],
  controllers: [PairsController, CategoriesController],
  providers: [PairsService],
})
export class PairsModule {}
