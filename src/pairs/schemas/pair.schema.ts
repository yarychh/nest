/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PairDocument = Pair & Document;

@Schema()
export class Pair {
  @Prop()
  userId: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  source: string;

  @Prop()
  shown: boolean;
}

export const PairScema = SchemaFactory.createForClass(Pair);
