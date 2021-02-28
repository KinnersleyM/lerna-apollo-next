import { useQuery, gql } from "@apollo/client";
import Navbar, { NavSection, PageTitle } from "../components/Nav";

export default function Home() {
  return (
    <>
      <Navbar>
        <NavSection>
          <PageTitle color="blue.400">Hello</PageTitle>
        </NavSection>
      </Navbar>
      <HelloWorld></HelloWorld>
    </>
  );
}

const HELLO = gql`
  query Hello {
    hello
  }
`;

function HelloWorld() {
  const { loading, error, data } = useQuery(HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <p>{data.hello}</p>;
}
