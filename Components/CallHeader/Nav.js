import React, { useState } from 'react'
import "./Nav.css"
import MenuIcon from '@material-ui/icons/Menu';
import SideHeader from '../Header/SideHeader';
import { Link } from 'react-router-dom';
import Modales from '../Modales/Modales';
import ModalContact from '../Modales/ModalContact';




function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const ClickEffect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="parentDiv1">

      <div className="subParentDiv1">

        <div className="theHeader1">

          <div className="logoDiv1"><img src={""} alt="Logo" /></div>

          <div className="navDiv1">
            <Link to="/" className="link1">  <p className="nav1">Home</p></Link>
            <Modales />
            <Link to="/episode" className="link1"><p className="nav1">Episode</p></Link>
            <ModalContact />

          </div>
          <div className="Menu">
            <MenuIcon onClick={ClickEffect} />
          </div>
          <div className="side">
            < SideHeader isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>


        </div>


      </div>

    </div>
  )
}

export default Nav
