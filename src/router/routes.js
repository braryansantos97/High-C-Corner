import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import AnimeNews from '../pages/AnimeNews';
import MoviesNews from '../pages/MoviesNews';
import ContactMe from '../pages/ContactMe';

const routes = [
    {
        Element: Home,
        key: 'Home',
        path: '/home'
    },
    {
        Element: About,
        key: 'About',
        path: '/about'
    },
    {
        Element: AnimeNews,
        key: 'AnimeNews',
        path: '/animenews'
    },
    {
        Element: MoviesNews,
        key: 'MoviesNews',
        path: '/moviesnews'
    },
    {
        Element: ContactMe,
        key: 'ContactMe',
        path: '/contactme'
    }
];

export default routes;


