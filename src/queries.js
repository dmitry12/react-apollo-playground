import {
    gql,
} from 'react-apollo';

export const getPropertiesId = gql`
    query getProperties {
      properties {
        id
      }
    }
`;

export const getPropertiesAll = gql`
    query getPropertiesAll {
      properties {
        id,
        deviceId,
        address,
      }
    }
`;
