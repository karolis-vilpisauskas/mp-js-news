import { gql } from "@apollo/client";

export const getPodcasts = gql`
  query GetPodcasts {
    podcasts {
      id
      title
      thumbnail {
        url
      }
    }
  }
`;
