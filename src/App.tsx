import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from 'styles/global'
import usePersistedState from 'utils/usePersistedState'

import light from 'styles/themes/light'
import dark from 'styles/themes/dark'

import { Layout, Header, Footer, Body } from 'components'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const { t } = useTranslation()

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header toogleTheme={toogleTheme} />
        <Body>
          <div>{t('content')}</div>
        </Body>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
