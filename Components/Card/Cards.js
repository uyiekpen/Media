import React from 'react'
import "./Cards.css"
import cardimg from "../Card/Image/Social.png"
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../Footer/Footer';
import sided from "../Card/Image/heart.jpg"
import bbest from "../Card/Image/best.jpg"
import last from "../Card/Image/images.jpg"


function Cards() {
  return (
    <div className="parentCardDiv">
      <div className="subParentCardDiv">
        <div className="allCardsDiv">


          <Link to="/Social" className="link1" >
            <div className="cardNo1">
              <img src={cardimg} alt="HeadPhoneImg" className="cardImg" />
              <p className="title">SOCIAL SELF CARE</p>
              <p className="subTitle">Yay....If all a person ever does is work, it's difficult to practice social self-care.</p>
              <VolumeUpIcon

                style={{
                  marginTop: "50px", color: "black"
                }}

              />
            </div>

          </Link>

          <Link to="/Emotions" className="link1" >
            <div className="cardNo2">
              <img src={last} alt="HeadPhoneImg" className="cardImg" />
              <p className="title">EMOTIONAL SELF CARE</p>
              <p className="subTitle">Loving yourself and appreciating yourself to improve your life
</p>
              <VolumeUpIcon

                style={{
                  marginTop: "50px", color: "black"
                }}
              />
            </div>
          </Link>

          <Link to="/Side" className="link1" >

            <div className="cardNo3">
              <img src={sided} alt="HeadPhoneImg" className="cardImg" />
              <p className="title">ONE SIDED LOVE</p>
              <p className="subTitle">One-sided love can be referred to as an infatuation or any kind of attraction.</p>
              <VolumeUpIcon
                style={{
                  marginTop: "20px", color: "black"
                }}

              />          </div>
          </Link>

          <Link to="/audio" className="link1" >

            <div className="cardNo4">
              <img src={bbest} alt="HeadPhoneImg" className="cardImg" />
              <p className="title">5 best things you need in a relationship</p>
              <p className="subTitle">Knowing this things help to build a relationship
</p>
              <VolumeUpIcon
                style={{
                  marginTop: "80px", color: "black"
                }}

              />          </div>

          </Link>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cards
