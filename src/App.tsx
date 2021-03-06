import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import {
  ProductContextProvider as ProductContext
} from './contexts/ProductContext/ProductContext';

import './App.css';

import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Layout from './pages/Layout/Layout';

const App: React.FC = () => {
  return (
    <ProductContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout /> }>
            <Route index element={ <Main /> } />
            <Route path='cart' element={ <Cart /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductContext>
  );
};

export default App;