import React from "react";
import RepositoryList from "../components/RepositoryList";

const Index = ({ data }) => (
  <div>
    <h1>My repositories</h1>
    <RepositoryList repositories={data.github.viewer.repositories} />
  </div>
);

export default Index;

export const query = graphql`
  query RepositoriesQuery {
    github {
      viewer {
        repositories(
          orderBy: { field: CREATED_AT, direction: DESC }
          first: 100
        ) {
          nodes {
            name
            url
          }
        }
      }
    }
  }
`;
