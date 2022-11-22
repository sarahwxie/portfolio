import {React, useEffect} from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// create a parallax homepage
function HomePage() {
    useEffect(() => {
        // List of sentences
        var _CONTENT = [ "Web Development", "Machine Learning", "Cybersecurity", "Blockchain/Web3" ];

        // Current sentence being processed
        var _PART = 0;

        // Character number of the current sentence being processed
        var _PART_INDEX = 0;

        // Holds the handle returned from setInterval
        var _INTERVAL_VAL;

        // Element that holds the text
        const element = document.querySelector("#typeText");

        // Implements typing effect
        function Type() {
        	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        	element.innerHTML = text;
        	_PART_INDEX++;

        	// If full sentence has been displayed then start to delete the sentence after some time
        	if(text === _CONTENT[_PART]) {
        		clearInterval(_INTERVAL_VAL);
        		setTimeout(function() {
        			_INTERVAL_VAL = setInterval(Delete, 50);
        		}, 1000);
        	}
        }

        // Implements deleting effect
        function Delete() {
        	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        	element.innerHTML = text;
        	_PART_INDEX--;

        	// If sentence has been deleted then start to display the next sentence
        	if(text === '') {
        		clearInterval(_INTERVAL_VAL);

        		// If last sentence then display the first one, else move to the next
        		if(_PART === (_CONTENT.length - 1))
        			_PART = 0;
        		else
        			_PART++;
        		_PART_INDEX = 0;

        		// Start to display the next sentence after some time
        		setTimeout(function() {
        			_INTERVAL_VAL = setInterval(Type, 100);
        		}, 200);
        	}
        }

        // Start the typing effect on load
        _INTERVAL_VAL = setInterval(Type, 100);

      });
    return (
        <div
          style={{
            width: "100%",
            height: "90%",
            position: "absolute"
          }}
        >
          <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={0.2} style={{ opacity: 1, width:"auto", marginLeft: "40%", marginTop: "12vh" }}>
              <img
                alt="self portrait"
                src={require('../assets/sarah.png')}
                style={{ width: "40%" }}
              />
          </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: 0.6, marginTop: "-8vh" }}>
              <img
                alt="blue2"
                src={require('../assets/blue-1.png')}
                style={{ display: "block", width: "100%", marginLeft: "0%", marginTop: "0%" }}
              />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.1} style={{ opacity: 1, marginTop: "-8vh" }}>
              <img
                alt="blue1"
                src={require('../assets/sharp.png')}
                style={{ width: "100%", marginLeft: "0%" }}
              />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={-0.1} style={{ opacity: 1, width:"auto", marginLeft: "-40%", marginTop: "-8vh" }}>
            <div style={{ marginLeft: "10%", display: "inline-block"}}>
                <h1
                  style={{ marginTop: "35vh", fontSize: "92px", fontWeight: "900" }}
                >SARAH XIE</h1>
                  <div style={{ fontFamily: "space mono, sans-serif", color: "#00008b", textAlign: "right", marginLeft: "15px" }} id="container">
                    	<div id="typeText"></div>
                   </div>
              </div>
            </ParallaxLayer>


          </Parallax>

        </div>
    )
}

export default HomePage;
