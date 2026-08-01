import React, {useState } from "react";

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    };

    return(
        <>
            <nav className="navbar">
                <h1>Computing Atlas</h1>
            </nav>
        </>
    );

}

export default Navbar;
