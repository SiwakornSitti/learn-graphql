// inputtype.js
const graphql = require('graphql');
const GraphQLObjectType = graphql.GraphQLObjectType;
const GraphQLString = graphql.GraphQLString;
const GraphQLList = graphql.GraphQLList;
const GraphQLInt = graphql.GraphQLInt;

const voteType = new GraphQLObjectType({
  name: "vote",
  description: "vote of The product",
  fields: () => ({
   star: {
     type: GraphQLInt,
     description: "one_star of the vote",
   },
   men: {
     type: GraphQLInt,
     description: "men of vote",
   },
   women: {
     type: GraphQLInt,
     description: "women of vote",
   }
 })
});

const productType = new GraphQLObjectType({
  name: "products",
  description: "Detail of The product",
  fields: () => ({
    _id: {
     type: GraphQLString,
     description: "id of the product",
    },
    name: {
     type: GraphQLString,
     description: "Name of the product",
    },
    price: {
     type: GraphQLInt,
     description: "price of product",
    },
    category: {
     type: new GraphQLList(GraphQLString),
     description: "category of product",
    },
    vote: {
     type: new GraphQLList(voteType),
     description: "vote of product",
    }
  })
});
module.exports = {
  productType: productType
}