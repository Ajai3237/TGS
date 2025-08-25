import React from 'react'

function Home() {
  return (
    <>
      <div
        style={{
          width: "100%", height: "750px", position: "relative", backgroundImage: "url('/Assets/pexels-jakubzerdzicki-16071270.jpg')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.4)" }}></div>

        {/* Centered text */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", }} >
          {/* Main Heading */}
          <h1 style={{
            fontSize: "55px", fontWeight: "bolder", fontFamily: "'Open Sans', sans-serif", color: "white", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            marginTop: "110px"
          }}>
            <span style={{ color: "white" }}>Traits Global</span>{" "}
            <span style={{ color: "#FFAA01" }}>Solutions</span>
          </h1>

          {/* Subtitle */}
          <div style={{ textAlign: "center", lineHeight: "50px", color: "rgba(255, 255, 255, 0.55)", }} >
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                fontFamily: "'Open Sans', sans-serif"
              }}
            >
              "Preserving The Virtue of
            </span>
            <br />
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Technology"
            </span>
          </div>

          {/* Button */}
          <div style={{ marginTop: "20px" }}>
            <a
              style={{
                backgroundColor: "rgba(255, 170, 1, 0.7)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                textDecoration: "none",
                fontWeight: "bold",
                textAlign: 'center'
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home