import { gql } from 'graphql-tag'

export const listMediaQuery = gql`
  query ($sort: [MediaSort], $page: Int) {
    Page(page: $page) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: $sort) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`

export const getMediaQuery = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      description
      type
      format
      status
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonInt
      seasonYear
      episodes
      countryOfOrigin
      averageScore
      favourites
      popularity
      characters {
        edges {
          id
          node {
            id
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            description
            image {
              large
              medium
            }
            age
            gender
            dateOfBirth {
              year
              month
              day
            }
          }
        }
      }
      relations {
        edges {
          id
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
          }
        }
      }
    }
  }
`

export const getCharacterQuery = gql`
  query ($id: Int) {
    Character(id: $id) {
      id
      name {
        first
        middle
        last
        full
        native
        userPreferred
      }
      description
      image {
        large
        medium
      }
      gender
      media {
        edges {
          id
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
          }
        }
      }
    }
  }
`
