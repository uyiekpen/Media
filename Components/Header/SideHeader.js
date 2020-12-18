import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.css"
import Modales from '../Modales/Modales'
import ModalContact from '../Modales/ModalContact'


function SideHeader({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen ? <div className="SideHeader">
        <Link to="/" className="link" style={{ textDecoration: "none", color: "white" }}> <p>Home</p></Link>
        <Modales />
        <Link to="/episode" className="link" style={{ textDecoration: "none", color: "white" }}> <p>Episode</p></Link>
        <ModalContact />
      </div> : null}
    </>
  )
}

export default SideHeader
