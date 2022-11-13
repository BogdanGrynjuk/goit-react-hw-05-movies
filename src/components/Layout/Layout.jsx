import { Loader } from "components/Loader/Loader";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Header, Link  } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>        
          <nav>
            <Link to='/' end>Home</Link>
            <Link to='/movies'>Movies</Link>
         </nav>        
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>      
    </>
  );
};