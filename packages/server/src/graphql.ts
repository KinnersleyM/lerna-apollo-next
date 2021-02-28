import "reflect-metadata";
import { ApolloServer, Config } from "apollo-server-lambda";
import { BuildSchemaOptions, buildSchemaSync } from "type-graphql";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from "aws-lambda";
import { HelloResolver } from "./resolvers";

const schemaOptions: BuildSchemaOptions = { resolvers: [HelloResolver] };
const schema = buildSchemaSync(schemaOptions);
const serverConfig: Config = {
  schema,
  introspection: true,
  playground: {
    endpoint: "/dev/graphql",
  },
};

const createApolloLambdaHandler = async (serverConfig: Config) => {
  const server = new ApolloServer({
    schema,
    ...serverConfig,
  });

  return server.createHandler({
    cors: {
      origin: "*",
      credentials: true,
    },
  });
};

// Apollo Server Lambda package does not currently support async handlers so callback version must be used.
export function graphqlHandler(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>
): void {
  createApolloLambdaHandler(serverConfig).then((handler) =>
    handler(event, context, callback)
  );
}
