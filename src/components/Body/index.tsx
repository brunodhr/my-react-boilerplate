import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  transition: 0.5s;
  padding: 10px;
  height: calc(100vh - 113px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: calc(100vh - 130px);
  }
`
interface Props {
  children: any
}

const Body: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
)

export default Body
