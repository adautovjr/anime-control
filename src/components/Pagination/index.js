import React from 'react'

import * as S from './styles'

const Pagination = ({ pageInfo, onChangePage }) => {
  const pages = Array.from(
    Array(pageInfo ? Number(pageInfo?.total / pageInfo?.perPage) : 0).keys()
  )

  return (
    <>
      <S.PaginationContainer>
        {pages.map(i => {
          if (
            i + 1 > pageInfo?.currentPage - 5 &&
            i + 1 < pageInfo?.currentPage + 5
          ) {
            return (
              <S.Page
                isActive={i + 1 === pageInfo?.currentPage}
                onClick={() => onChangePage(i + 1)}
                key={i}
              >
                {i + 1}{' '}
              </S.Page>
            )
          }
          return null
        })}
      </S.PaginationContainer>
    </>
  )
}

export default Pagination
