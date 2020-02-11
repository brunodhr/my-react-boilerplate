import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.body`
  height: 100vh;
`

interface Props {
  children: any
}

const Layout: React.FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Layout
