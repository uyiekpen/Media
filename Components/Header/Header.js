import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from "../Card/Cards"
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import pix from "../Header/Logo/logo.png"
import SideHeader from './SideHeader';
import Modales from '../Modales/Modales';
import ModalContact from "../Modales/ModalContact"



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const ClickEffect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="parentDiv">
      <div className="subParentDiv">
        {/* <p className="nav">About Podcast</p> */}

        <div className="theHeader">

          <div className="logoDiv"><img src={pix} alt="Logo" /></div>

          <div className="navDiv">
            <Link to="/" className="link"><p className="nav">Home</p></Link>
            <Modales />
            <Link to="/episode" className="link"><p className="nav">Episode</p></Link>
            {/* <Link to="/contact" className="link"><p className="nav">Contact</p></Link> */}
            <ModalContact />
          </div>
          <div className="MenuIcon">
            <MenuIcon style={{ color: "white", display: "flex", justifyContent: "center", marginTop: "30px" }} onClick={ClickEffect} />
          </div>
          <SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="osas">
          <p className="ppp">Let's talk<br /> Lifestyle</p>
        </div>
        <div>
        </div>


      </div>
      <Cards />
    </div>
  )
}

export default Header

