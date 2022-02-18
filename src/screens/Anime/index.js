import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useQuery } from '@apollo/client'

import { getMediaQuery } from '../../graphql/queries'
import { LoadingIcon } from '../../resources/svg'
import BackButton from '../../components/BackButton'
import { Paths } from '../../routes'

import * as S from './styles'

const Anime = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(getMediaQuery, {
    variables: {
      id,
    },
  })

  return (
    <Container>
      <BackButton />
      {data && !isLoading ? (
        <>
          <S.PageHeader>
            {data.Media.title.english ||
              data.Media.title.native ||
              data.Media.title.komaji ||
              data.Media.title.userPreferred}
          </S.PageHeader>
          <S.PageContainer>
            <S.ImageContainer src={data.Media.coverImage.extraLarge} />
            <S.Description
              dangerouslySetInnerHTML={{ __html: data.Media.description }}
            />
            <S.CharacterSectionTitle>Characters</S.CharacterSectionTitle>
            <S.CharacterList>
              {data.Media.characters.edges.map(person => (
                <S.Character
                  key={person.id}
                  to={Paths?.character?.to(person.node.id) || '#'}
                >
                  <S.CharacterImage src={person.node.image.large} />
                  <S.CharacterName>{person.node.name.full}</S.CharacterName>
                </S.Character>
              ))}
            </S.CharacterList>
          </S.PageContainer>
        </>
      ) : (
        <S.BlankSpace>
          <LoadingIcon />
        </S.BlankSpace>
      )}
    </Container>
  )
}

export default Anime
