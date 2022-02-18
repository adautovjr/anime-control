import styled from 'styled-components'
import media from 'styled-media-query'
import CustomLink from '../../components/CustomLink'

export const PageHeader = styled.h1`
  padding: 50px 10px;
`

export const BlankSpace = styled.div`
  padding: 50px;
`

export const PageContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;  
  `}
  ${media.greaterThan('large')`
    padding: 50px;
  `}
`

export const ImageContainer = styled.img.attrs(({ src }) => ({
  src,
}))`
  padding: 10px;
  max-width: 100%;
  grid-column: 1/13;
  margin: auto;

  ${media.greaterThan('medium')`
    grid-column: 1/4;
  `}
`

export const Description = styled.div`
  padding: 50px;
  ${media.greaterThan('medium')`
    grid-column: 4/13;
  `}
`

export const CharacterSectionTitle = styled.h3`
  padding: 50px 10px;
  grid-column: 1/13;
`

export const CharacterList = styled.div`
  grid-column: 1/13;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;

  ${media.lessThan('large')`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}
`

export const Character = styled(CustomLink)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const CharacterImage = styled.img.attrs(({ src }) => ({
  src,
}))`
  max-width: 100%;
`

export const CharacterName = styled.div``

export const CharacterAge = styled.div``
