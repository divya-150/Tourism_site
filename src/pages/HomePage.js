import React from "react";
import { Link } from "react-router-dom";

const places = [
  { id: "ayodhya", name: "Ayodhya", image: "/images/ayodhya.jpg" },
  { id: "bengaluru", name: "Bengaluru", image: "/images/bengaluru.jpg" },
  { id: "chennai", name: "Chennai", image: "/images/chennai.jpg" },
  { id: "darjeeling", name: "Darjeeling", image: "/images/darjeeling.jpg" },
  { id: "delhi", name: "Delhi", image: "/images/delhi.jpg" },
  { id: "gateway", name: "Gateway of India", image: "/images/gateway.jpg" },
  { id: "goa", name: "Goa", image: "/images/goa.jpg" },
  { id: "hampi", name: "Hampi", image: "/images/hampi.jpg" },
  { id: "hyderabad", name: "Hyderabad", image: "/images/hyderabad.jpg" },
  { id: "jaipur", name: "Jaipur", image: "/images/jaipur.jpg" },
  { id: "kerala", name: "Kerala", image: "/images/kerala.jpg" },
  { id: "kochi", name: "Kochi", image: "/images/kochi.jpg" },
  { id: "kolkata", name: "Kolkata", image: "/images/kolkata.jpg" },
  { id: "lucknow", name: "Lucknow", image: "/images/lucknow.jpg" },
  { id: "manali", name: "Manali", image: "/images/manali.jpg" },
  { id: "mumbai", name: "Mumbai", image: "/images/mumbai.jpg" },
  { id: "munnar", name: "Munnar", image: "/images/munnar.jpg" },
  { id: "mysore", name: "Mysore", image: "/images/mysore.jpg" },
  { id: "ooty", name: "Ooty", image: "/images/ooty.jpg" },
  { id: "shimla", name: "Shimla", image: "/images/shimla.jpg" },
  { id: "tajmahal", name: "Taj Mahal", image: "/images/tajmahal.jpg" },
  { id: "udaipur", name: "Udaipur", image: "/images/udaipur.jpg" },
  { id: "varanasi", name: "Varanasi", image: "/images/varanasi.jpg" },
  { id: "vishakapatnam", name: "Vishakapatnam", image: "/images/vishakapatnam.jpg" },
  { id: "vrindavan", name: "Vrindavan", image: "/images/vrindavan.jpg" }
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundImage: "url('/images/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)"
      }}>
        WELCOME TO INDIA
      </div>

      {/* Places Grid */}
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>Discover India's Wonders</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
        justifyItems: "center"
      }}>
        {places.map((place) => (
          <Link key={place.id} to={`/details/${place.id}`} style={{ textDecoration: "none", color: "black" }}>

            <div style={{
            //   backgroundColor: "#F8F9FA",/
              backgroundColor: "rgb(255, 248, 220)", // Light golden background
              border: "2px solid rgb(211, 186, 106)",  // Light golden border
            // border: "2px solid #FFD700", // Gold border

              width: "250px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center"
            }}>
              <img src={place.image} alt={place.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <h3 style={{ padding: "10px" }}>{place.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
