import { useQuery } from "@apollo/client";
import { useHistory } from "react-router";
import { logUserOut } from "../apollo";
import PageTitle from "../components/PageTitle";
import {gql} from "@apollo/client";
import LinkBox from "../components/auth/LinkBox";

const SEE_COFFEE_SHOPS_QUERY = gql`
  query seeCoffeeShops($lastId: Int) {
    seeCoffeeShops(lastId: $lastId) {
      id
      name
      latitude
      longitude
      user {
        id
        username
      }
      photos {
        id
        url
      }
      categories {
        id
        name
        slug
      }
    }
  }
`;

function Home() {
    const history = useHistory();
    const { data } = useQuery(SEE_COFFEE_SHOPS_QUERY, {
      fetchPolicy: "no-cache",
    });
    return (
        <div>
            <PageTitle title="Home" />
            <h1>HOME</h1>
            <LinkBox link="/add" linkText="Add Shop"></LinkBox>
            <button onClick={() => logUserOut(history)}>Log out</button>
            {data?.seeCoffeeShops?.map((shop) => (
              <div>{shop.name}</div>
            ))}
        </div>
    );
};

export default Home;