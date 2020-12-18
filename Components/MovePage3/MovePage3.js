import React, { useState, useEffect } from 'react'
import gifImage from "../audPix/auud.gif"
import "./MovePage.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Nav from '../CallHeader/Nav';
import { App } from "../../Firebase"

const db = App.firestore()

export function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}


function MovePage() {
  const [audioUrl, setaudioUrl] = useState([])

  const fetchAudio = async () => {
    await db.collection("Audio").onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setaudioUrl(items);
    });
  };

  useEffect(() => {
    fetchAudio();
  }, []);
  return (
    <div className="master">
      <Nav />
      <div className="subMaster">

        <div className="playAudio">
          <img src={gifImage} alt="gifImage" className="gifImage" />
          <p className="titleee">5 best things you need in a relationship</p>
        </div>


        {audioUrl.map(({ audio }) => (
          <div className="otherContents">
            <AudioPlayer
              autoPlay
              src={audio}
              onPlay={e => console.log("onPlay")}
            // other props here
            />

          </div>
        )
        )}

      </div>

    </div>

  )
}

export default MovePage
