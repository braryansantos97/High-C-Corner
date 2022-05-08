import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import routes from './routes';
import Home from '../pages/Home'
import Navbar from '../components/Navbar';

const AppRouter = () => {


    

    return(
        <Router>
            <div className='cotainer-fliud'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
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


