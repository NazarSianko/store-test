import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

/*server.listen()
.then(() => {
    
    return server.listen({port: process.env.PORT || 4000})
})
.then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});*/
server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      
    `);
  });