// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Main.css";
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
     <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt=''/>
     </div>

     <div className="main-container">
        <div className="greet">
            <p><span>Hello,Terry</span></p>
            <p> How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Give me ways to add certain foods to my diet</p>
                <img src={assets.compass_icon} alt=''/>
            </div>
            <div className="card">
                <p>Brainstorm ideas for a mocktail given specific ingredients</p>
                <img src={assets.bulb_icon} alt=''/>
            </div>
            <div className="card">
                <p>Explain what the keto diet is in simple terms</p>
                <img src={assets.message_icon} alt=''/>
            </div>
            <div className="card">
                <p>Write a product description for a new type of toothbrush</p>
                <img src={assets.code_icon} alt=''/>
            </div>
        </div>
    
    <div className="main-bottom">
        <div className="search-box">
            <input type='text' placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt=""/>  
            </div>
        </div>
        <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
    </div>


     </div>
    </div>
  )
}

export default Main
