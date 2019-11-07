import {} from "dotenv/config";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";

const PORT = process.env.PORT || 4000;

const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
  Query: {
    hello: () => "hi"
  }
};

// This server is a express server with GraphQLServer on it
const server = new GraphQLServer({ typeDefs, resolvers });

// Since GraphQLServer has express under it
// You can add a middleware like the below
server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
