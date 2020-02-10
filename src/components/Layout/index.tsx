import React from 'react'

import * as S from './styles'

interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Layout
