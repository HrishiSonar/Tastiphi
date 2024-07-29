import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [Menu, SetMenu] = useState(null); // Initialize with null to check for loading state

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=100721"
      );
      const json = await data.json();

      console.log(json);
      SetMenu(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
      // Handle the error (e.g., set an error state)
    }
  };

  if (!Menu) {
    return <Shimmer />; // Render Shimmer component if Menu is not yet loaded
  }

  const response = Menu; // Store the entire response object in a variable

  // Safely access the nested properties
  const {
    name,
    totalRatingsString,
    cloudinaryImageId,
    sla,
    cuisines = [],
    costForTwoMessage,
    city,
  } = response?.data?.cards?.[2]?.card?.card?.info || {};

  return (
    <>
      <div className="Menu">
        <h2>Menu</h2>
        <ul>
          <img
            alt="res-logo"
            style={{ height: "230px", width: "200px" }}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          />
          <li>{name || "Name not available"}</li>
          <li>{city || "City not available"}</li>
          <li>{cuisines.join(", ") || "Cuisines not available"}</li>
          <li>{costForTwoMessage || "Cost information not available"}</li>
          <li>{totalRatingsString}</li>
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
