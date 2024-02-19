import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';

const doctorsData = [
  {
    id: "1",
    name: 'Samia Mekame',
    speciality: 'OPHTALMOLOGIST',
  },
  {
    id: "2",
    name: 'Catherine Bedoy',
    speciality: 'PSYCHOLOGIST',
  },
];

const typeDefs = `#graphql
type Doctor {
  id: String
  name: String
  speciality: SPECIALITY
  addresses: Address
}

type Address {
  streetName: String
}

enum SPECIALITY {
  PSYCHOLOGIST
  OPHTALMOLOGIST
}

type Query {
  doctors: [Doctor]
  doctor(id: ID!): Doctor
}
`

const resolvers = {
  Query: {
    doctors: (parent, args, context, info) => {
      return doctorsData
    },
    doctor: (parent, args, context, info) => {
      const {id} = args
      return doctorsData.find(d => d.id === id)
    }
  },
  Doctor: {
    addresses: (parent, args, context, info) => {
      console.log(parent)
      return {streetName: `${parent.id} street`}
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const {url} = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log(`🚀  Server ready at: ${url}`)