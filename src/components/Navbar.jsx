import React from 'react';

const Navbar = () => {
    return (
        <nav className="film-nav">
            <div className="nav__container">
                <div className="nav__logo">
                    <span className="nav__title">FilmFinder</span>
                </div>
            
                <ul className="nav__list">
                    <li><a href="#" className="nav__link">Home</a></li>
                    <li><a href="#" className="nav__link">Movies</a></li>
                    <li><a href="#" className="nav__link nav__link--primary">Contact</a></li>
                </ul>
            </div>
        </nav>
           
    );
};

export default Navbar;