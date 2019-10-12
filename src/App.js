import React, { useEffect } from 'react';
// import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles/index';
import Navbar from './components/Navbar/index';

function Layout() {
  const [isApp, setIsApp] = React.useState(false);
  useEffect(
    () =>
      setIsApp(
        'standalone' in window.navigator && window.navigator['standalone']
      ),
    []
  );

  return (
    <>
      <GlobalStyles isApp={isApp} />
      <Navbar />
    </>
  );
}

export default Layout;
