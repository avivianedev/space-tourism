import { useState } from 'react'
import './Navbar.modules.scss'
import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'



const Navbar = () => {

    function showMenuResponsive() {
        return SetShowMenu(!showMenu)
    }

    const [showMenu, SetShowMenu] = useState(false)

    return (

        <nav className='nav-container'>
            <img className='logo' src={logo} alt="logo website space tourism" />

            <div className='nav-line'></div>
            <ul className='list-container'>
                <li className='list-item'><Link to="/"><span>00</span> Home</Link></li>
                <li className='list-item'><Link to="/destination"><span>01</span> Destination</Link></li>
                <li className='list-item'><Link to="/crew"><span>02</span> Crew</Link></li>
                <li className='list-item'><Link to="/technology"><span>03</span> Technology</Link></li>
            </ul>

            <button onClick={showMenuResponsive} className='btn-hambuger'>
                {showMenu ?
                    <img className='menu-hambuger' src="../src/assets/icons/icon-close.svg" alt="Image menu hamburger" />
                    :
                    <img className='menu-hambuger' src="../src/assets/icons/icon-hamburger.svg" alt="Image menu hamburger" />
                }
            </button>

            {showMenu &&
                <ul className='list-container-mobile'>
                    <li className='list-item-mobile'><a href=""><span>00</span> Home</a></li>
                    <li className='list-item-mobile'><a href=""><span>01</span> Destination</a></li>
                    <li className='list-item-mobile'><a href=""><span>02</span> Crew</a></li>
                    <li className='list-item-mobile'><a href=""><span>03</span> Technology</a></li>
                </ul>
            }
        </nav>
    )

}

export default Navbar