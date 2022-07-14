import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Main</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
};

export default Layout;