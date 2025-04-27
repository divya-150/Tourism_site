import React from "react";

function HeroSection() {
  return (
    <div style={{
      backgroundImage: "url('/images/india-hero.jpg')", // Background Image
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px", 
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "40px",
      fontWeight: "bold",
      textShadow: "2px 2px 5px black"
    }}>
      WELCOME TO INDIA
    </div>
  );
}

export default HeroSection;
