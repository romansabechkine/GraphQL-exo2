import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers.js";
import { GibliAPI } from "./datasources/GibliAPI.js";
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000},
  context: async () => {
    const {cache} = server
    return {
      dataSources: {
        gibliAPI: new GibliAPI({cache})
      }
    }
  }
})

console.log(`🚀  Server ready at: ${url}`)