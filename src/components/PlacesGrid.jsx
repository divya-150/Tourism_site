import React from "react";

const places = [
  { name: "Goa", image: "/images/goa.jpg" },
  { name: "Agra", image: "/images/tajmahal.jpg" },
  { name: "Delhi", image: "/images/delhi.jpg" },
  { name: "Jaipur", image: "/images/jaipur.jpg" },
  { name: "Mumbai", image: "/images/mumbai.jpg" },
  { name: "Chennai", image: "/images/chennai.jpg" },
  { name: "Bengaluru", image: "/images/bengaluru.jpg" },
  { name: "Hyderabad", image: "/images/hyderabad.jpg" },
  { name: "Kochi", image: "/images/kochi.jpg" },
  { name: "Udaipur", image: "/images/udaipur.jpg" },
  { name: "Shimla", image: "/images/shimla.jpg" },
  { name: "Manali", image: "/images/manali.jpg" },
  { name: "Darjeeling", image: "/images/darjeeling.jpg" },
  { name: "Ooty", image: "/images/ooty.jpg" },
  { name: "Munnar", image: "/images/munnar.jpg" },
  { name: "Varanasi", image: "/images/varanasi.jpg" },
  { name: "Madurai", image: "/images/madurai.jpg" },
  { name: "Haridwar", image: "/images/haridwar.jpg" },
  { name: "Hampi", image: "/images/hampi.jpg" },
  { name: "Ayodhya", image: "/images/ayodhya.jpg" },
  { name: "Thiruvananthapuram", image: "/images/thiruvananthapuram.jpg" },
  { name: "Vrindavan", image: "/images/vrindavan.jpg" },
  { name: "Visakhapatnam", image: "/images/vishakapatnam.jpg" },
  { name: "Mysore", image: "/images/mysore.jpg" },
  { name: "Lucknow", image: "/images/lucknow.jpg" }
];

const PlacesGrid = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Discover India's Wonders</h1>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px", 
        marginTop: "20px" 
      }}>
        {places.map((place, index) => (
          <div key={index} style={{ 
            border: "1px solid #ccc", 
            padding: "10px", 
            borderRadius: "10px", 
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", 
            cursor: "pointer" 
          }}>
            <img 
              src={place.image} 
              alt={place.name} 
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} 
            />
            <h3>{place.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesGrid;
