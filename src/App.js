import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles/index';
import Navbar from './components/Navbar/index';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-top: calc(var(--responsive-padding) + var(--safe-area-inset-top));
  padding-right: calc(var(--responsive-padding) + var(--safe-area-inset-right));
  padding-bottom: calc(
    var(--responsive-padding) + var(--safe-area-inset-bottom)
  );
  padding-left: calc(
    var(--responsive-padding) + 3.75rem + var(--safe-area-inset-left)
  );

  @media only screen and (max-width: 1100px) {
    padding-left: calc(var(--responsive-padding) + var(--safe-area-inset-left));
    padding-bottom: calc(
      4rem + var(--responsive-padding) + var(--safe-area-inset-bottom)
    );
  }

  @media only screen and (max-width: 700px) {
    padding: calc(
      0.5rem + var(--responsive-padding) + var(--safe-area-inset-top)
    );
    padding-right: calc(
      var(--responsive-padding) + var(--safe-area-inset-right)
    );
    padding-bottom: calc(
      0.5rem + var(--responsive-padding) + var(--safe-area-inset-bottom)
    );
    padding-left: calc(var(--responsive-padding) + var(--safe-area-inset-left));
    font-size: 21px;
    margin-bottom: 3.5rem;
  }
`;

function Layout() {
  const [isApp, setIsApp] = React.useState(false);
  React.useEffect(
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
      <Main>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore culpa
        ullam nesciunt reiciendis facere accusamus nulla laudantium nihil vero
        minima ipsa quo pariatur minus, sint cumque veritatis esse, ducimus
        architecto!{' '}
      </Main>
    </>
  );
}

export default Layout;
