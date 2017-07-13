//services.js
const { Products } = require('../../db/setup');
const getProducts = function(callback) {
    Products.find(function(err, result) {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}
const getProductByPrice = function(price, callback) {
    Products.find({price: { $lt: price } }, function (err, result) {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}
const createProduct = function(args, callback) {
    const product = new Products({
        name: args.name,
        price: args.price,
        category: args.category
    });
    product.save(function (err, result) {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}
const deleteProduct = function(productId, callback) {
    Products.findOneAndRemove({_id : productId}, function (err, result) {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    });
}
module.exports = {
    getProducts : getProducts,
    getProductByPrice : getProductByPrice,
    createProduct : createProduct,
    deleteProduct : deleteProduct,
};
