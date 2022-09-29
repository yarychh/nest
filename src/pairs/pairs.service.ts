/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePassPairDto } from './dto/create-pair.dto';
import { UpdatePassPairDto } from './dto/update-pair.dto';
import { Pair, PairDocument } from './schemas/pair.schema';

@Injectable()
export class PairsService {
  constructor(@InjectModel(Pair.name) private pairModel: Model<PairDocument>) {}

  public async getAll(): Promise<Pair[]> {
    return this.pairModel.find().exec();
  }

  public async getPairsByUserId(id: string): Promise<Pair[]> {
    return (await this.pairModel.find()).filter((pair) => pair.userId === id);
  }

  public async create(pairDto: CreatePassPairDto): Promise<Pair> {
    const newProduct = new this.pairModel(pairDto);
    return newProduct.save();
  }

  public async remove(id: string): Promise<Pair> {
    return this.pairModel.findByIdAndRemove(id);
  }

  public async update(
    id: string,
    passPairDto: UpdatePassPairDto,
  ): Promise<Pair> {
    return this.pairModel.findByIdAndUpdate(id, passPairDto, { new: true });
  }
}
