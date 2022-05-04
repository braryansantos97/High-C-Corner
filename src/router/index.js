import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from './routes';
import Home from '../pages/Home'

const AppRouter = () => {

    return(
        <Router>
            <div className='container'>
                <Routes>
                    <Route>
                        <Home />
                    </Route>
                {routes.map(({ Element, key, path }) => (
  					<Route
  						key={key}
  						path={path}
  						element={<Element />}
  					></Route>
  				))}
                </Routes>
            </div>
        </Router>
    )
}
export default AppRouter;


