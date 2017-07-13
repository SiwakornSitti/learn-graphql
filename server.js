const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const PORT = process.env.port || 3000
const MyGraphQLSchema = require('./graphql/schema');
const cors = require('cors');

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));


app.listen(PORT);


console.log("Server running on localhost:", PORT);