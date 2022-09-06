import React from 'react'
import { useState } from "react";
import "./NavResponsive.css";

function NavResponsive() {
    const [tpBar, setTpBar] = useState(true);
    const showTpBar = () => setTpBar(!tpBar);

  return (
    <>
        <div className="navResponsive">
            <h3 className='logoNavResponsive'>LinkChar</h3>
            <div
                onClick={showTpBar}
                className={tpBar ? "hamburgerNav" : "hamburgerNav activeHamburger"}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className={tpBar ? "navRes_Container" : "navRes_Container activeNav"}>
            <ul className="ulNavResponsive">
                <li>Movies</li>
                <li>TV shows</li>
                <li>Animations</li>
                <li>Plans</li>
            </ul>
            <div className="profileResponsive">
                <input className='inputNavResponsive' placeholder='Search something' type='text' />
                <p>Profile</p>
            </div>
        </div>
    </>
  )
}

export default NavResponsive;
