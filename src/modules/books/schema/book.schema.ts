// import mongoose, { Schema } from 'mongoose';
// import { IBooks } from '../interface/books.interafce';

// @Schema()

// export const Book = new Schema<IBooks>({
//   title: {
//     type: String,
//   },
//   author: {
//     type: String,
//   },
//   publishedDate: { type: Date },
//   price: {
//     type: Number,
//   },
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  publishedDate: Date;

  @Prop()
  price: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
