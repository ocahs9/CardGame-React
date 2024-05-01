import CardGame from './assets/components/CardGame';
import React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import styled from 'styled-components';

function App() {
  
  return (
    <React.Fragment> {/*사실 <></> 과 같은 기능을 한다. */}
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <CardGame/>
      </ThemeProvider>
    </React.Fragment>
  );
}


export default App
