import React from 'react'
import { theme } from '@chakra-ui/core'
import FormikContainer from './auth/FormikContainer'
import { ThemeProvider } from 'emotion-theming'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <FormikContainer />
      </div>
    </ThemeProvider>
  )
}

export default App