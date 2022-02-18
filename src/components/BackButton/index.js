import React from 'react'

import { ArrowLeft } from '../../resources/svg'

import * as S from './styles'

const BackButton = () => (
  <S.ButtonContainer onClick={() => window.history.back()}>
    <ArrowLeft />
  </S.ButtonContainer>
)

export default BackButton
