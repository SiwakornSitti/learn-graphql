// queryfields.js
const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;
const GraphQLInt = graphql.GraphQLInt;
const { productType } = require('./inputtype')
const productServices = require('./services')

const getHey = {
  type: GraphQLString,
  resolve: (_, args)=>{
    return "Hello GraphQL"
  }
}
const getProducts = {
  type: new GraphQLList(productType),
  resolve: function(_, args){
    return new Promise(function(resolve, reject) {
      productServices.getProducts(function(data){
        resolve(data)
      })
    })
  }
}
const getProductByPrice = {
  type: new GraphQLList(productType),
  args: {
    price: {
      type: GraphQLInt
    }
  },
  resolve: function(_, args){
    const priceParams = args.price
    return new Promise(function(resolve, reject) {
      productServices.getProductByPrice(priceParams, function(data){
        resolve(data)
      })
    })
  }
}
module.exports = {
  getHey: getHey, // ไม่จำเป็นที่ชื่อต้องซ้ำกัน
  getProducts: getProducts,
  getProductByPrice: getProductByPrice,
}