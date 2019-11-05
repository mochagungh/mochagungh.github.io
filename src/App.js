import React from 'react';
import { GlobalStyles } from './components/GlobalStyles/index';
import Navbar from './components/Navbar/index';
import { Main } from './container/Main';

function Layout() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Main></Main>
    </>
  );
}

export default Layout;
