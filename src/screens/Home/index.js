import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Container } from 'react-bootstrap'

import { listMediaQuery } from '../../graphql/queries'
import Pagination from '../../components/Pagination'
import { LoadingIcon } from '../../resources/svg'
import { Paths } from '../../routes'

import * as S from './styles'

const getTitle = sort => {
  switch (sort) {
    case 'POPULARITY_DESC':
      return 'Popular now'
    case 'UPDATED_AT_DESC':
      return 'Latest'
    case 'EPISODES_DESC':
      return 'Longest'
    case 'SCORE_DESC':
      return 'Best rated'
    default:
      return 'Popular now'
  }
}

const Home = ({ sort }) => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery(listMediaQuery, {
    variables: {
      sort: [sort],
      page,
    },
  })

  return (
    <Container>
      <S.PageHeader> {getTitle(sort)} </S.PageHeader>

      {data && !isLoading ? (
        <>
          <Pagination
            pageInfo={data?.Page?.pageInfo}
            onChangePage={i => setPage(i)}
          />
          <S.GridContainer>
            {data?.Page?.media?.map(anime => (
              <S.Anime
                to={Paths?.anime?.to(anime.id) || '#'}
                data-id={anime.id}
                key={anime.id}
              >
                <S.ImgContainer src={anime.coverImage.large}>
                  <S.ImgPixel />
                </S.ImgContainer>
                <S.Body>
                  <S.Title>{anime.title.english}</S.Title>
                  <S.Text>{anime.title.native}</S.Text>
                </S.Body>
              </S.Anime>
            ))}
          </S.GridContainer>
          <Pagination
            pageInfo={data?.Page?.pageInfo}
            onChangePage={i => setPage(i)}
          />
        </>
      ) : (
        <S.BlankSpace>
          <LoadingIcon />
        </S.BlankSpace>
      )}
    </Container>
  )
}

export default Home
