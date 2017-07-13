const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/learngraphql');
// Connection URL
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connected");
});
const Products = mongoose.model('products', {
    name: String,
    price: Number,
    category: Array,
    vote: Array
});
module.exports = {
    Products: Products
}