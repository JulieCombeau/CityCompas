import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
// import { buildSchema } from "type-graphql";
import datasource from "./db";

const start = async (): Promise<void> => {
  await datasource.initialize();

  // const schema = await buildSchema({
  //   resolvers: [],
  // });

  const server = new ApolloServer({
    // schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

void start();
