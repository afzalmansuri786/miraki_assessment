import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schema/book.schema';

// {
//   title: ' string',
//   author: 'string',
//   publishedDate: 2023-09-25T10:20:49.909Z,
//   price: 123,
//   _id: new ObjectId("65115f01bdf207641b41b769"),
//   __v: 0
// }

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private booksModel: Model<Book>) {
    // this.create({
    //   title: ' miraki',
    //   author: 'tech',
    //   publishedDate: new Date(),
    //   price: 12345689,
    // });

    this.findAll({});
  }

  async create(createBookDto: CreateBookDto) {
    const book = await this.booksModel.create(createBookDto);
    console.log(book);
    return book;
  }

  async findAll(search: { title?: string }) {
    // filter is remaining
    const books = await this.booksModel.find({
      title: {
        $regex: search.title,
        $options: 'i',
      },
    });

    console.log(books);
    return books;
  }

  async findOne(id: string) {
    const findOne = await this.booksModel.findById(id);
    return findOne;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.booksModel.findByIdAndUpdate(id, updateBookDto);
    return `Book is updated`;
  }

  async remove(id: string) {
    await this.booksModel.findByIdAndDelete(id);
    return `Boomid deleted`;
  }
}
