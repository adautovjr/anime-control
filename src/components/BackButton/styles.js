import styled from 'styled-components'

export const ButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50px;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #212529;
  }
`
