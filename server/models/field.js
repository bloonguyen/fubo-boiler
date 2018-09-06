const mongoose = require('mongoose');
// const generateSlug = require('../utils/slugify');
const logger = require('../logs');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // slug: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  desc: {
      type: String,
      required: true,
  },

  createdAt: {
    type: Date,
    required: true,
  },

});

class FieldClass {
  static async list({ offset = 0, limit = 10 } = {}) {
    const fields = await this.find({})
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    return { fields };
  }

  static async add({
    name,
    desc
  }) {
    return this.create({
      name,
      desc,
      createdAt: new Date(),
    });
  }

}
  // static async getBySlug({ slug }) {
  //   const bookDoc = await this.findOne({ slug });
  //   if (!bookDoc) {
  //     throw new Error('Book not found');
  //   }
  //
  //   const book = bookDoc.toObject();
  //
  //   // eslint-disable-next-line no-use-before-define
  //   book.chapters = (await Chapter.find({ bookId: book._id }, 'title slug').sort({
  //     order: 1,
  //   })).map(ch => ch.toObject());
  //
  //   return book;
  // }

  // static async add({
  //   name,
  //   price,
  //   textNearButton = '',
  //   githubRepo,
  //   supportURL = '',
  // }) {
  //   const slug = await generateSlug(this, name);
  //
  //   return this.create({
  //     name,
  //     slug,
  //     price,
  //     textNearButton,
  //     githubRepo,
  //     supportURL,
  //     createdAt: new Date(),
  //   });
  // }
  //
  // static async edit({
  //   id,
  //   name,
  //   price,
  //   textNearButton = '',
  //   githubRepo,
  //   supportURL = '',
  // }) {
  //   const book = await this.findById(id, 'slug name');
  //
  //   if (!book) {
  //     throw new Error('Not found');
  //   }
  //
  //   const modifier = {
  //     price,
  //     textNearButton,
  //     supportURL,
  //     githubRepo,
  //   };
  //
  //   if (name !== book.name) {
  //     modifier.name = name;
  //     modifier.slug = await generateSlug(this, name);
  //   }
  //
  //   await this.updateOne({ _id: id }, { $set: modifier });
  //
  //   const editedBook = await this.findById(id, 'slug');
  //
  //   return editedBook;
  // }


mongoSchema.loadClass(FieldClass);

const Field = mongoose.model('Field', mongoSchema);

module.exports = Field;
