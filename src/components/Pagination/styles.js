import styled, { css } from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 10px;
`

export const Page = styled.div`
  padding: 5px 12px;
  border-radius: 5px;
  ${({ isActive }) => css`
    &:hover {
      cursor: ${isActive ? 'default' : 'pointer'};
      background-color: ${isActive ? '#1a1d20' : '#212529'};
    }
    ${isActive &&
    `
    background-color: #1a1d20;
      font-weight: bold;
      font-size: 1.1rem;
    `}
  `}
`
