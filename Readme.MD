
Source: https://medium.com/taleless/%E0%B8%AB%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%8A%E0%B9%89-graphql-%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88-1-%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-schema-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%84%E0%B9%89%E0%B8%94%E0%B9%86%E0%B9%84%E0%B8%9B%E0%B9%80%E0%B8%AB%E0%B8%AD%E0%B8%B0-42cddbdb187

Run Webpack : webpack -w for watching any change in code

GraphQL: localhost:3000/graphql 
Server: node server.js

Need mongodb to run

if you'd like to run the client website plz install
npm install http-server

### Sill have an issue
Please comment throw new Error in node_modules/apollo-client/core/QueryManager.js line: 411

    if (typeof options.notifyOnNetworkStatusChange !== 'undefined') {
        //throw new Error('Cannot call "query" with "notifyOnNetworkStatusChange" option. Only "watchQuery" has that option.');
    }