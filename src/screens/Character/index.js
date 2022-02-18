import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useQuery } from '@apollo/client'

import { getCharacterQuery } from '../../graphql/queries'
import { LoadingIcon } from '../../resources/svg'
import BackButton from '../../components/BackButton'
import { Paths } from '../../routes'

import * as S from './styles'

const Character = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(getCharacterQuery, {
    variables: {
      id,
    },
  })

  return (
    <Container>
      <BackButton />
      {data && !isLoading ? (
        <>
          <S.PageHeader>{data.Character.name.full}</S.PageHeader>
          <S.PageContainer>
            <S.ImageContainer src={data.Character.image.large} />
            <S.Description
              dangerouslySetInnerHTML={{ __html: data.Character.description }}
            />
            <S.CharacterSectionTitle>Featured in</S.CharacterSectionTitle>
            <S.CharacterList>
              {data.Character.media.edges.map(media => (
                <S.Character
                  key={media.id}
                  to={Paths?.anime?.to(media.node.id) || '#'}
                >
                  <S.CharacterImage src={media.node.coverImage.extraLarge} />
                  <S.CharacterName>
                    {media.node.title.english ||
                      media.node.title.native ||
                      media.node.title.komaji ||
                      media.node.title.userPreferred}
                  </S.CharacterName>
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

export default Character
