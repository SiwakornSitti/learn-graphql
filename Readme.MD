
Run Webpack : webpack -w for watching any change in code

GraphQL: localhost:3000/graphql 
Server: node server.js

if you'd like to run the client website plz install
npm install http-server

### Sill have an issue
Please comment throw new Error in node_modules/apollo-client/core/QueryManager.js line: 411

    if (typeof options.notifyOnNetworkStatusChange !== 'undefined') {
        throw new Error('Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.');
    }