import { gql, useLazyQuery } from '@apollo/client'

const ALL_PERSONS = gql`
  query characters {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
        }
        location {
          id
        }
        image

        created
      }
    }
  }
`
export { ALL_PERSONS }
