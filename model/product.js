
const mongoose = require('mongoose')
const { Schema } = mongoose;



// Schema
const ratingSchema = new Schema({
  stars: {
    type: String
  },
  count: {
    type: Number, // e.g., 127
    required: true,
    default: 0
  }
});
const productSchema = new Schema({
    name: {type:String},
    image: {type:String},
    priceCents: {type :Number},
    rating: { 
      type: ratingSchema,
      default: () => ({ stars: '', count: 0 })},
    keywords: [String]
  });

 exports.Product = mongoose.model('Product', productSchema);