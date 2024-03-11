import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    getFilms: (_, __, {dataSources}) => {
      return dataSources.gibliAPI.getFilms()
    },
    getPeople: (_, __, {dataSources}) => {
      return dataSources.gibliAPI.getPeople()
    }
  }
}