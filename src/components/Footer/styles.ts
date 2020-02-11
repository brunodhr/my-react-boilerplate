import styled from 'styled-components'

export const Menu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20%;
  @media (min-width: 320px) and (max-width: 425px) {
    justify-content: space-between;
  }
`

export const Link = styled.a``

export const Icon = styled.svg`
  fill: ${props => props.theme.colors.secundary};
  padding: 10px;
  height: 50px;
  width: 50px;
  opacity: 0.4;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`
