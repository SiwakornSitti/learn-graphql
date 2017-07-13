// schema.js
const graphql = require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const GraphQLObjectType = graphql.GraphQLObjectType;
const { getHey, getProducts, getProductByPrice } = require('./products/queryFields');
const { addProduct, deleteProduct } = require('./products/mutationFields');


const queryType = new GraphQLObjectType({
  name: "queryProduct",
  description: "query of product",
  fields: {
    hey: getHey,
    getProducts: getProducts,
    getProductByPrice: getProductByPrice
  }
});

const mutationType = new GraphQLObjectType({
  name: "mutationProduct",
  description: "mutation of product",
  fields: {
    addProduct: addProduct,
    deleteProduct: deleteProduct
  }
});

const MyGraphQLSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
});

module.exports = MyGraphQLSchema