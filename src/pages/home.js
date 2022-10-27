import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// create a parallax homepage
function HomePage() {
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
                  <p
                    style={{ fontFamily: "space mono, sans-serif", color: "#00008b", textAlign: "right", marginLeft: "15px" }}
                  >section that deletes and retypes</p>
              </div>
            </ParallaxLayer>


          </Parallax>

        </div>
    )
}

export default HomePage;
