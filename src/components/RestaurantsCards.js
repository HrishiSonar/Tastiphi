const RestaurantCard = ({ resObj }) => {
  const { name, cloudinaryImageId, cuisines = [], avgRating, deliveryTime, costForTwo } = resObj.info;

  return (
    <div className="res-Card">
      <img
        alt="res-logo"
        style={{ height: "120px", width: "250px" }}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
