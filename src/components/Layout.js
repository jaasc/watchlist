import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation()

    return(
        <header>
            <nav className="container">
                {
                    location.pathname === "/" ? 
                    <>
                    <h1>Find your film</h1>
                    <h3><Link to="/watchlist" className="link">My Watchlist</Link></h3>
                    </>
                     :
                     <>
                    <h1>My Watchlist</h1>
                    <h3><Link to="/" className="link">Search for movies</Link></h3>
                    </>
                }
            </nav>
        </header>
    )
}

export default Layout;