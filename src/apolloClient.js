import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movie-graphql-server.herokuapp.com/"
});

export default client;