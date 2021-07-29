import React, {useState} from 'react'

function Hero() {
 
  return (
    <div className="hero">
      <Card>
        <div style={{padding: "50px 0" }}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
  );
}

export default Hero