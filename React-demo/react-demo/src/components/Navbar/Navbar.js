import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../../config/Images';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={images.logo} alt="" />
            </div>
            <nav>
              <ol>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>

      </header>
    </div>
  )
}

export default Navbar
