import styled, { css } from 'styled-components'
import CustomLink from '../../components/CustomLink'

import src from '../../resources/pixel-lens.png'

export const PageHeader = styled.h1`
  padding: 50px 10px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  padding-bottom: 50px;
`

export const Anime = styled(CustomLink)`
  display: inline-grid;
  background-color: #212529;
  border-radius: 10px;
  transition: all 0.3s;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
    cursor: pointer;
    transform: scale(1.05);
  }
`

export const ImgContainer = styled.div`
  ${({ src }) => css`
    background-image: url('${src}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    max-height: 200px;
    border-radius: 10px;
  `}
`

export const ImgPixel = styled.img.attrs({
  src,
})`
  width: 100%;
  max-width: 100%;
`

export const Body = styled.div`
  padding: 10px;
`

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.2rem;
`

export const Text = styled.div`
  font-style: italic;
  font-size: 0.8rem;
  line-height: 1.2rem;
`

export const BlankSpace = styled.div`
  padding: 50px;
`
