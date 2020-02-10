import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.body`
  padding: 10px;
  height: calc(100vh - 113px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.background};
  }
  @media (min-width: 320px) and (max-width: 425px) {
    height: calc(100vh - 130px);
  }
`
interface Props {
  children: any
}

const Body: React.FC<Props> = ({ children }) => (
  <StyledBody>{children}</StyledBody>
)

export default Body
