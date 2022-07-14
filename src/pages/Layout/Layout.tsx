import React from 'react';
import {
  Outlet
} from 'react-router-dom';

import Header from '../../components/layout/Header/Header';

const Layout: React.FC = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;