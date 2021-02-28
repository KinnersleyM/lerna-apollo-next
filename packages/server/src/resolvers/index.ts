import { Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
  @Query(() => String, { description: `Gets a string of "Hello World"` })
  async hello(): Promise<string> {
    return "Hello World";
  }
}
