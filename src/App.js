import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './components/GlobalStyles/index';
import Navbar from './components/Navbar/index';

function Layout() {
  const [isApp, setIsApp] = useState(false);
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
