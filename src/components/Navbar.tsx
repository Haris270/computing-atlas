import {useState } from "react";
import {Link} from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";


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

                <div className="menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className='ham-menu'/> : <IoMdMenu className='ham-menu'/>}
            </div>


            <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>

                <ul className='nav-links'>
                    <li className="nav-item1"><Link to={'/timeline'} onClick={toggleMenu} className='menu-options option1'>Timeline</Link></li>
    
                    <li className="nav-item2"><Link to={'algorithm'} onClick={toggleMenu} className='menu-options option2'>Algorithms</Link></li>
  
                    {/* <li><Link to={'/'} onClick={toggleMenu} className='menu-options'>Contact</Link></li> */}
                </ul>

            </div>
                
            </nav>
        </>
    );

}

export default Navbar;
