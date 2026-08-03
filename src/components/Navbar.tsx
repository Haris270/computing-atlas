import React, {useState } from "react";
import {Link} from "react-router-dom"


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    };

    return(
        <>
            <nav className="navbar">
                
                <Link to='/' className="link-component">
                <div className="navbar-logo">
                    <h3>The<br/>
                        Computing<br/> 
                        Atlas</h3>
                </div>
                </Link>
                
            </nav>
        </>
    );

}

export default Navbar;
