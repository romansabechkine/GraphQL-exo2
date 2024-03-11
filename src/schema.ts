import gql from "graphql-tag";

export const typeDefs = gql`
type Film {
  id: String!
  title: String!
  people: [People!]!
}

type People {
  id: String!
  name: String!
  eyeColor: String
  films: [Film!]!
}

type Query {
  getFilms: [Film!]!
  getPeople: [People!]!
}
`