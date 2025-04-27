import React from "react";
import { useParams } from "react-router-dom";

const placesDetails = {
  ayodhya: {
    name: "Ayodhya",
    image: "/images/ayodhya.jpg",
    description: "Ayodhya, the birthplace of Lord Rama, is one of the holiest cities in Hinduism, with deep historical and religious significance. It is home to the Ram Janmabhoomi temple, which is a major pilgrimage site for millions of devotees. The city is also known for its vibrant festivals, especially during Diwali and Ram Navami, when it transforms into a hub of spiritual and cultural activities.",
    guide: { name: "Rajesh Pandey", phone: "+91 9876543210" }
  },
  bengaluru: {
    name: "Bengaluru",
    image: "/images/bengaluru.jpg",
    description: "Bengaluru, known as the 'Silicon Valley of India,' is a major tech hub that beautifully blends modernity with greenery. The city is famous for its pleasant climate, numerous IT parks, and a vibrant nightlife. Key attractions include the stunning Lalbagh Botanical Garden, the historic Bangalore Palace, and the lush Cubbon Park, along with bustling shopping streets like Brigade Road and Commercial Street.",
    guide: { name: "Akhil Mehta", phone: "+91 9876543211" }
  },
  chennai: {
    name: "Chennai",
    image: "/images/chennai.jpg",
    description: "Chennai, the capital of Tamil Nadu, is a coastal city renowned for its rich cultural heritage, ancient temples, and classical music traditions. The city boasts attractions like Marina Beach, one of the longest urban beaches in the world, the historic Kapaleeshwarar Temple, and Fort St. George. Chennai is also famous for its vibrant arts scene, particularly during the December Music Festival, which celebrates Carnatic music.",
    guide: { name: "Vignesh R", phone: "+91 9876543212" }
  },
  darjeeling: {
    name: "Darjeeling",
    image: "/images/darjeeling.jpg",
    description: "Darjeeling, often referred to as the 'Queen of Hills,' is celebrated for its lush tea plantations, stunning views of the Kanchenjunga mountain range, and charming colonial-era architecture. Visitors can enjoy a ride on the UNESCO-listed Darjeeling Himalayan Railway, visit Tiger Hill for breathtaking sunrises, and explore the serene valleys and Buddhist monasteries that dot the landscape.",
    guide: { name: "Pranav Gurung", phone: "+91 9876543213" }
  },
  delhi: {
    name: "Delhi",
    image: "/images/delhi.jpg",
    description: "Delhi, the capital of India, is a vibrant metropolis that seamlessly blends ancient history with modernity. The city is home to iconic landmarks such as the Red Fort, Qutub Minar, India Gate, and the Lotus Temple. The bustling streets of Chandni Chowk offer a culinary adventure with mouth-watering street food, while Connaught Place serves as a hub for shopping and entertainment, making it a must-visit destination for travelers.",
    guide: { name: "Sandeep Kumar", phone: "+91 9876543214" }
  },
  goa: {
    name: "Goa",
    image: "/images/goa.jpg",
    description: "Goa, often referred to as India's beach paradise, is famous for its stunning coastline, vibrant nightlife, and rich Portuguese heritage. Visitors can indulge in water sports at Baga Beach, explore the historical churches of Old Goa, or enjoy the lively atmosphere at famous clubs. The scenic Dudhsagar Falls and lush spice plantations provide a refreshing retreat from the bustling beaches, making Goa a perfect destination for relaxation and adventure.",
    guide: { name: "Ryan D'Souza", phone: "+91 9876543215" }
  },
  hyderabad: {
    name: "Hyderabad",
    image: "/images/hyderabad.jpg",
    description: "Hyderabad, known as the 'City of Pearls,' is celebrated for its rich history, magnificent palaces, and delectable Hyderabadi Biryani. The city boasts landmarks such as the iconic Charminar, the historic Golconda Fort, and the serene Hussain Sagar Lake. As a major IT and business hub, Hyderabad beautifully blends old-world charm with modern development, offering visitors a unique cultural experience.",
    guide: { name: "Arvind Rao", phone: "+91 9876543216" }
  },
  jaipur: {
    name: "Jaipur",
    image: "/images/jaipur.jpg",
    description: "Jaipur, famously known as the 'Pink City,' is renowned for its magnificent palaces, vibrant bazaars, and historical forts. Key attractions include the stunning Hawa Mahal, the majestic Amer Fort, and the opulent City Palace. The city's bustling markets are a treasure trove of exquisite handicrafts, jewelry, and traditional Rajasthani cuisine, making it a paradise for shoppers and food lovers alike.",
    guide: { name: "Ramesh Singh", phone: "+91 9876543217" }
  },
  kerala: {
    name: "Kerala",
    image: "/images/kerala.jpg",
    description: "Kerala, often referred to as 'God’s Own Country,' is famous for its lush backwaters, serene beaches, and picturesque hill stations. Popular destinations include Munnar, known for its sprawling tea gardens, Alleppey, famous for its enchanting houseboat cruises, and Kovalam, celebrated for its stunning beaches. The state is also renowned for its Ayurvedic treatments and traditional Kathakali performances, offering a unique cultural experience.",
    guide: { name: "Vivek Nair", phone: "+91 9876543218" }
  },
  kolkata: {
    name: "Kolkata",
    image: "/images/kolkata.jpg",
    description: "Kolkata, known as the 'City of Joy,' is the cultural capital of India, celebrated for its colonial architecture, literary heritage, and delectable sweets. Key attractions include the majestic Victoria Memorial, the iconic Howrah Bridge, and the revered Dakshineswar Temple. The bustling streets of College Street are a haven for book lovers, making Kolkata a vibrant city rich in culture and history.",
    guide: { name: "Anirban Chatterjee", phone: "+91 9876543219" }
  },
  manali: {
    name: "Manali",
    image: "/images/manali.jpg",
    description: "Manali, a popular hill station nestled in the Himalayas, is famous for its adventure sports, breathtaking scenic beauty, and snow-capped mountains. Visitors can enjoy activities like skiing, paragliding, and trekking, or simply relax amidst the stunning landscapes. The Solang Valley and Rohtang Pass are must-visit spots for nature lovers and adventure enthusiasts alike.",
    guide: { name: "Karan Sharma", phone: "+91 9876543220" }
  },
  mumbai: {
    name: "Mumbai",
    image: "/images/mumbai.jpg",
    description: "Mumbai, often referred to as the 'City of Dreams,' is India's financial capital, known for its bustling life, Bollywood film industry, and iconic landmarks like the Gateway of India and Marine Drive. The city offers a rich tapestry of cultures, cuisines, and experiences, from the vibrant street food scene to the luxurious shopping districts, making it a must-visit destination for travelers.",
    guide: { name: "Sohail Shaikh", phone: "+91 9876543221" }
  },
  mysore: {
    name: "Mysore",
    image: "/images/mysore.jpg",
    description: "Mysore is renowned for its majestic Mysore Palace, a stunning example of Indo-Saracenic architecture, and is famous for its silk sarees and the grand Dasara festival. The city is also home to beautiful gardens, such as the Brindavan Gardens, and offers a glimpse into the rich cultural heritage of Karnataka, making it a delightful destination for history and culture enthusiasts.",
    guide: { name: "Shivaram Bhat", phone: "+91 9876543222" }
  },
  ooty: {
    name: "Ooty",
    image: "/images/ooty.jpg",
    description: "Ooty, often referred to as the 'Queen of Hill Stations,' is famous for its lush tea gardens, charming toy train rides, and stunning landscapes. Visitors can explore the beautiful Botanical Gardens, enjoy boating on Ooty Lake, or take a scenic ride on the Nilgiri Mountain Railway, making it a perfect getaway for nature lovers and families.",
    guide: { name: "Rajiv Menon", phone: "+91 9876543223" }
  },
  shimla: {
    name: "Shimla",
    image: "/images/shimla.jpg",
    description: "Shimla, the summer capital of British India, is famous for its colonial architecture, scenic views, and pleasant climate. The Mall Road is a popular destination for shopping and dining, while attractions like the Ridge and Jakhoo Temple offer stunning panoramic views of the surrounding mountains, making Shimla a charming hill station for visitors.",
    guide: { name: "Nikhil Verma", phone: "+91 9876543224" }
  },
  tajmahal: {
    name: "Taj Mahal",
    image: "/images/tajmahal.jpg",
    description: "The Taj Mahal, a UNESCO World Heritage Site, is an iconic symbol of love built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. This architectural masterpiece, made of white marble, is renowned for its stunning beauty and intricate craftsmanship, attracting millions of visitors from around the world each year.",
    guide: { name: "Faizan Khan", phone: "+91 9876543225" }
  },
  udaipur: {
    name: "Udaipur",
    image: "/images/udaipur.jpg",
    description: "Udaipur, often referred to as the 'City of Lakes,' is known for its stunning palaces, serene lakes, and rich Rajput history. The City Palace, overlooking Lake Pichola, is a magnificent example of royal architecture, while the Jag Mandir and Lake Palace add to the city's charm. Udaipur is also famous for its vibrant arts and crafts, making it a romantic destination for travelers.",
    guide: { name: "Rohit Rathore", phone: "+91 9876543226" }
  },
  varanasi: {
    name: "Varanasi",
    image: "/images/varanasi.jpg",
    description: "Varanasi, one of the oldest cities in the world, is a spiritual hub located on the banks of the Ganges River. Known for its ghats, where pilgrims perform rituals and ceremonies, Varanasi offers a unique cultural experience. The city is also famous for its silk weaving, vibrant markets, and the mesmerizing Ganga Aarti, making it a must-visit for those seeking spiritual enlightenment.",
    guide: { name: "Pandit Mahesh", phone: "+91 9876543227" }
  },
  vishakapatnam: {
    name: "Vishakapatnam",
    image: "/images/vishakapatnam.jpg",
    description: "Vishakapatnam, a coastal city in Andhra Pradesh, is known for its beautiful beaches, naval base, and scenic hills. Popular attractions include the picturesque RK Beach, the historic Submarine Museum, and the serene Araku Valley. The city offers a blend of natural beauty and cultural heritage, making it an ideal destination for both relaxation and exploration.",
    guide: { name: "Surya Prakash", phone: "+91 9876543228" }
  },
  vrindavan: {
    name: "Vrindavan",
    image: "/images/vrindavan.jpg",
    description: "Vrindavan, associated with Lord Krishna, is a spiritual city filled with temples and devotion. Known for its vibrant festivals, especially Holi, the city attracts pilgrims and tourists alike. The numerous temples, ghats, and ashrams offer a glimpse into the rich cultural and spiritual heritage of India, making Vrindavan a unique destination for those seeking peace and spirituality.",
    guide: { name: "Narayan Das", phone: "+91 9876543229" }
  }
};

const DetailsPage = () => {
  const { placeId } = useParams();
  const place = placesDetails[placeId];

  if (!place) {
    return <h2 style={{ textAlign: "center" }}>Place not found</h2>;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "left" }}>{place.name}</h1>

      <img src={place.image} alt={place.name} style={{
        width: "100%", maxHeight: "500px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px"
      }} />

      <p style={{ fontSize: "1.2rem", textAlign: "justify", marginBottom: "20px" }}>{place.description}</p>

      <h3 style={{ textAlign: "left", fontSize: "1.5rem" }}>Guide Details -</h3>
      <p style={{ textAlign: "left", fontSize: "1.1rem" }}><strong>Name:</strong> {place.guide.name}</p>
      <p style={{ textAlign: "left", fontSize: "1.1rem" }}><strong>Contact:</strong> {place.guide.phone}</p>
    </div>
  );
};

export default DetailsPage;