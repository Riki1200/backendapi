const { makeExecutableSchema } = require('graphql-tools');


const resolvers = require('./resolvers');
const typeDefs = `
    type Query {
        greet(name: String!, age: Int!): String
        roles: [Users]
    }
    type Users {
        _id: ID
        task: String
        complete: Boolean
        description: String
    }
    type Mutation {
        createdJob(input: UserInput): Users
    }
 
    input UserInput {
        task : String!
        description: String!
        complete: Boolean!
    }
`;



const Schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

module.exports = Schema;