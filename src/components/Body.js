import RestaurantCard from "./RestaurantsCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const initialRestaurants = [
    {
      info: {
        id: "592110",
        name: "Hotel Dhangarwada",
        imageId: "oc9ol6xd7gai6vyeyngj",
        locality: "Pudamji Paper Mill, Dange Chowk",
        costForTwo: "₹600 for two",
        cuisines: ["North Indian", "Thalis", "Biryani", "Snacks"],
        avgRating: 3.9,
        totalRatings: "50+",
        promoted: true,
        deliveryTime: "35-40 mins",
        discountHeader: "10% OFF",
        discountSubHeader: "UPTO ₹40",
        isOpen: true,
        link: "swiggy://menu?restaurant_id=592110&source=collection&query=North%20Indian",
      },
    },
    //   // {
    //   //   id: "104105",
    //   //   name: "Manali-Family Resto Bar",
    //   //   imageId: "d9ef3f38b17acd30f3137c520757065b",
    //   //   locality: "Baner",
    //   //   costForTwo: "₹800 for two",
    //   //   cuisines: [
    //   //     "North Indian",
    //   //     "South Indian",
    //   //     "Punjabi",
    //   //     "Mughlai",
    //   //     "Seafood",
    //   //     "Kebabs",
    //   //     "Tandoor",
    //   //     "Biryani",
    //   //     "Juices",
    //   //     "Salads",
    //   //     "Chinese",
    //   //   ],
    //   //   avgRating: 4.4,
    //   //   totalRatings: "1K+",
    //   //   promoted: true,
    //   //   deliveryTime: "45-50 mins",
    //   //   discountHeader: "20% OFF",
    //   //   discountSubHeader: "UPTO ₹50",
    //   //   isOpen: true,
    //   //   link: "swiggy://menu?restaurant_id=104105&source=collection&query=North%20Indian",
    //   // },
    //   // {
    //   //   id: "568926",
    //   //   name: "Spice Tawa",
    //   //   imageId: "ihtm5pawi3tk48y1c2bm",
    //   //   locality: "Tathawade, Wakad",
    //   //   costForTwo: "₹1200 for two",
    //   //   cuisines: ["Seafood", "Indian", "Chinese", "Continental"],
    //   //   avgRating: 4.1,
    //   //   totalRatings: "20+",
    //   //   promoted: true,
    //   //   deliveryTime: "45-50 mins",
    //   //   discountHeader: "15% OFF",
    //   //   discountSubHeader: "UPTO ₹60",
    //   //   isOpen: true,
    //   //   link: "swiggy://menu?restaurant_id=568926&source=collection&query=North%20Indian",
    //   // },
    //   // {
    //   //   id: "626931",
    //   //   name: "Sweet Bengal",
    //   //   imageId: "fnj4dnvae2llknwmdus7",
    //   //   locality: "Vishnu Dev Nagar, Wakad",
    //   //   costForTwo: "₹150 for two",
    //   //   cuisines: ["Sweets", "Indian", "Snacks", "Desserts"],
    //   //   avgRating: 4.6,
    //   //   totalRatings: "1K+",
    //   //   isOpen: true,
    //   //   link: "https://www.swiggy.com/restaurants/sweet-bengal-vishnu-dev-nagar-wakad-pune-626931",
    //   // },
    //   // {
    //   //   id: "443036",
    //   //   name: "Marrakesh",
    //   //   imageId: "myi2w1doguxpronezfnb",
    //   //   locality: "Dange Chowk Road, Hinjawadi",
    //   //   costForTwo: "₹350 for two",
    //   //   cuisines: ["North Indian", "Snacks", "Beverages"],
    //   //   avgRating: 3.8,
    //   //   totalRatings: "1K+",
    //   //   isOpen: true,
    //   //   discountHeader: "₹100 OFF",
    //   //   discountSubHeader: "ABOVE ₹249",
    //   //   link: "https://www.swiggy.com/restaurants/marrakesh-dange-chowk-road-hinjawadi-pune-443036",
    //   // },
    //   // {
    //   //   id: "789012",
    //   //   name: "Peshawari",
    //   //   imageId:
    //   //     "v1674029942/PC_Creative%20refresh/3D_bau/collections_new/North_Indian.png",
    //   //   locality: "Koregaon Park",
    //   //   costForTwo: "₹800 for two",
    //   //   cuisines: ["North Indian", "Mughlai", "Kebabs"],
    //   //   avgRating: 4.2,
    //   //   totalRatings: "500+",
    //   //   isOpen: true,
    //   //   discountHeader: "15% OFF",
    //   //   discountSubHeader: "UPTO ₹75",
    //   //   link: "https://www.swiggy.com/restaurants/peshawari-koregaon-park-pune-789012",
    //   // },
    //   // {
    //   //   id: "234567",
    //   //   name: "Bikanerwala",
    //   //   imageId: "onyk0tkfl9m2h9owdgiy",
    //   //   locality: "Hinjewadi Phase 1",
    //   //   costForTwo: "₹600 for two",
    //   //   cuisines: ["North Indian", "Rajasthani", "Street Food", "Sweets"],
    //   //   avgRating: 4.0,
    //   //   totalRatings: "300+",
    //   //   isOpen: true,
    //   //   discountHeader: "20% OFF",
    //   //   discountSubHeader: "UPTO ₹100",
    //   //   link: "https://www.swiggy.com/restaurants/bikanerwala-hinjewadi-phase-1-pune-234567",
    //   // },
    //   // {
    //   //   id: "567890",
    //   //   name: "Delhi Zaika",
    //   //   imageId: "e12f273cc1e46f321b98df76f2a21fac",
    //   //   locality: "Viman Nagar",
    //   //   costForTwo: "₹500 for two",
    //   //   cuisines: ["North Indian", "Punjabi", "Biryani", "Chinese"],
    //   //   avgRating: 4.5,
    //   //   totalRatings: "700+",
    //   //   isOpen: true,
    //   //   discountHeader: "₹50 OFF",
    //   //   discountSubHeader: "ABOVE ₹299",
    //   //   link: "https://www.swiggy.com/restaurants/delhi-zaika-viman-nagar-pune-567890",
    //   // },
    //   // {
    //   //   id: "123456",
    //   //   name: "Paradise Biryani",
    //   //   imageId: "ded8983ea0044dc98d72ec04a1d66ada",
    //   //   locality: "Jubilee Hills",
    //   //   costForTwo: "₹800 for two",
    //   //   cuisines: ["Hyderabadi", "Biryani", "North Indian"],
    //   //   avgRating: 4.3,
    //   //   totalRatings: "800+",
    //   //   isOpen: true,
    //   //   discountHeader: "10% OFF",
    //   //   discountSubHeader: "UPTO ₹50",
    //   //   link: "https://www.swiggy.com/restaurants/paradise-biryani-jubilee-hills-hyderabad-123456",
    //   // },
    //   // {
    //   //   id: "234267",
    //   //   name: "Saravana Bhavan",
    //   //   imageId: "b3a41fd6d6d9c3aa46b64ac07664fbc3",
    //   //   locality: "Indiranagar",
    //   //   costForTwo: "₹600 for two",
    //   //   cuisines: ["South Indian", "Vegetarian"],
    //   //   avgRating: 4.5,
    //   //   totalRatings: "1200+",
    //   //   isOpen: true,
    //   //   discountHeader: "15% OFF",
    //   //   discountSubHeader: "UPTO ₹100",
    //   //   link: "https://www.swiggy.com/restaurants/saravana-bhavan-indiranagar-bangalore-234267",
    //   // },
    //   // {
    //   //   id: "345678",
    //   //   name: "Kolkata Kathi Roll",
    //   //   imageId:
    //   //     "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/604d55c8-73d3-4d38-a7cb-dde3c51ba961_579778.jpg",
    //   //   locality: "Park Street",
    //   //   costForTwo: "₹400 for two",
    //   //   cuisines: ["North Indian", "Street Food"],
    //   //   avgRating: 4.0,
    //   //   totalRatings: "500+",
    //   //   isOpen: true,
    //   //   discountHeader: "₹75 OFF",
    //   //   discountSubHeader: "ABOVE ₹299",
    //   //   link: "https://www.swiggy.com/restaurants/kolkata-kathi-roll-park-street-kolkata-345678",
    //   // },
  ];  
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRestaurants1, setFilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("kd");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
      // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || []);
  };

  if (listOfRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-btn" style={{ cursor: "pointer" }}>
        <input
          type="text"
          className="search-box"
          value={SearchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="Search" onClick={()=>{
          const filteredRestaurants = listOfRest.filter(
            (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase())
          )
          setFilteredRestaurants(filteredRestaurants)
        }}>
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const listOfRestFilter = initialRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRest(listOfRestFilter);
          }}
        >
          Top rated restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants1.map((resObj) => (
          <RestaurantCard key={resObj.info.id} resObj={resObj} />
        ))}
      </div>
    </div>
  );
};

export { Body };
