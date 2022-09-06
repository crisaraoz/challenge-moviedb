import React from 'react';
import { useState } from 'react';
import './Nav.css';
import NavResponsive from './NavResponsive';

function Nav() {

    const [tpBar, setTpBar] = useState(true);
    const showTpBar = () => setTpBar(!tpBar);

  return (
    <>
    <div className='navContainer'>   
        <div className='sections'>
            <h1 className='logoLink'>LinkChar</h1>
            <ul className='navSections'>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>Animations</li>
                <li>Plans</li>
            </ul>
        </div>
    

        <ul className='sectionTwo'>
            <div className='searchBox'>
                <input className='searchInput' placeholder='Search something' type='text' />
                <li className='searchNav'>
                    <img src='./search.png' alt=''/>
                </li>
            </div>
            <li>
                <div className='ellipseNav'></div>
            </li>
            <li>
                <div className='circles'>
                    <div className='divCircle'>
                        <img src="./circle.png" alt="" />
                        <img src="./circle.png" alt="" />
                        <img src="./circle.png" alt="" />
                    </div>
                </div>
            </li>

            <li>
                <div className='userArrow'>
                <div className='userOptions' onClick={showTpBar}>
                    <img src='./user.png' alt=''/>
                    <img src='./arrowBottom.png' alt=''/>
                </div>
    
                <div className={tpBar ? 'accountNav' : 'accountNav active'}>
                    <img src='./user.png' alt=''/>
                        <p>My Account</p>
                        <p>Help</p>
                        <p>Logout</p>
                </div>
                </div>
            </li>
        </ul>
    </div>
    <NavResponsive />

    </> 
  )
}

export default Nav
