/* eslint-disable react/no-danger-with-children */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const context = useContext(Context); // Get the context object

  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = context; // Destructure values from the context object

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
                <span>Hello, Terry</span>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Give me ways to add certain foods to my diet</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Brainstorm ideas for a mocktail given specific ingredients
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain what the keto diet is in simple terms</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Write a product description for a new type of toothbrush</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt=""/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt=""/>
              {loading? 
              <div className="loader">
                <hr/>
                <hr/>
                <hr/>
                <p>This is a dummy text</p>
              </div>
              : 
              <p dangerouslySetInnerHTML ={{__html: resultData}}></p>}
             
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
            {input? <img onClick={() => onSent()} src={assets.send_icon} alt="" />:null } 
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
