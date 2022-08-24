import React from "react";
import { Route, BrowserRouter, Routes as RouteProvider } from "react-router-dom";

import Home from "../views/home";

const Routes = () => {
   return(
       <BrowserRouter>
            <RouteProvider>
                <Route element = { <Home/> }  path="/" />
            </RouteProvider>
       </BrowserRouter>
   )
}

export default Routes;