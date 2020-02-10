import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}
`

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  transition: 0.5s;
`

export const Logo = styled.svg`
  padding: 10px;
  width: 80px;
  height: 80px;
  transition: 0.3s;
  opacity: 0.5;
  animation: ${rotate} infinite 20s linear;
  fill: ${props => props.theme.colors.secundary};
  &:hover {
    opacity: 1;
  }
`

export const Link = styled.a``

export const Flags = styled.div``
export const Flag = styled.span`
  width: 40px;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
`
