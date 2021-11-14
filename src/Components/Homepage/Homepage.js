import React from 'react';
import Login from '../Shared/Login/Login';
import Navigation from '../Shared/Navbar/Navigation';
import Header from './Header/Header'
import HomeServices from './Home Services/HomeServices';
import Topbar from './Topbar/Topbar';

const Homepage = () => {
    return (
        <div>
            
            <Header></Header>
            <HomeServices> </HomeServices>
        </div>
    );
};

export default Homepage;