// mutationfields.js
const graphql = require("graphql");
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;
const GraphQLInt = graphql.GraphQLInt;
const { productType } = require("./inputtype");
const productServices = require("./services");
const addProduct = {
  type: productType,
  args: {
    name: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    category: {
      type: new GraphQLList(GraphQLString)
    }
  },
  resolve: function(_, args) {
    return new Promise(function(resolve, reject) {
      productServices.createProduct(args, function(data) {
        console.log("Create product", data);
        resolve(data);
      });
    });
  }
};
const deleteProduct = {
  type: productType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: function(_, args) {
    return new Promise(function(resolve, reject) {
      productServices.deleteProduct(args.id, function(data) {
        console.log("Delete product", data);
        resolve(data);
      });
    });
  }
};
module.exports = {
  addProduct: addProduct,
  deleteProduct: deleteProduct
};
