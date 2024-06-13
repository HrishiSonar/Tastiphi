import React from "react";
import "./App.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="nav-Items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resObj }) => {
  const { info } = resObj.card;

  return (
    <div className="res-Card">
      <img
        alt="res-logo"
        style={{ height: "120x", width: "250px" }}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
      />
      <h3>{info.name}</h3>
      <h5>{info.cuisines.join(", ")}</h5>
      <h5>{info.avgRating} stars</h5>
      <h5>{info.sla.slaString}</h5>
      <h5>{info.costForTwo}</h5>
    </div>
  );
};

const restList = {
  restaurant1: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "592110",
        name: "Hotel Dhangarwada",
        cloudinaryImageId: "oc9ol6xd7gai6vyeyngj",
        locality: "Pudamji Paper Mill",
        areaName: "Dange Chowk",
        costForTwo: "₹600 for two",
        cuisines: ["North Indian", "Thalis", "Biryani", "Snacks"],
        avgRating: 3.9,
        parentId: "98775",
        avgRatingString: "3.9",
        totalRatingsString: "50+",
        promoted: true,
        adTrackingId: "cid=13290657~p=4~adgrpid=13290657#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=592110~eid=18a93000-969b-4506-a877-4553a3176767~srvts=1718299929969~collid=83645",
        sla: {
          deliveryTime: 37,
          lastMileTravel: 9.5,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "9.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-13 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=592110&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
  restaurant2: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "104105",
        name: "Manali-Family Resto Bar",
        cloudinaryImageId: "d9ef3f38b17acd30f3137c520757065b",
        locality: "Baner",
        areaName: "Baner",
        costForTwo: "₹800 for two",
        cuisines: [
          "North Indian",
          "South Indian",
          "Punjabi",
          "Mughlai",
          "Seafood",
          "Kebabs",
          "Tandoor",
          "Biryani",
          "Juices",
          "Salads",
          "Chinese",
        ],
        avgRating: 4.4,
        parentId: "131377",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId: "cid=14002305~p=5~adgrpid=14002305#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=104105~eid=f0fd2dba-5df4-4f3f-ac04-4c67e61db8fb~srvts=1718299929969~collid=83645",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 10.9,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "10.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-13 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=104105&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
  restaurant3: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "568926",
        name: "Spice Tawa",
        cloudinaryImageId: "ihtm5pawi3tk48y1c2bm",
        locality: "Tathawade",
        areaName: "Wakad",
        costForTwo: "₹1200 for two",
        cuisines: ["Seafood", "Indian", "Chinese", "Continental"],
        avgRating: 4.1,
        parentId: "341630",
        avgRatingString: "4.1",
        totalRatingsString: "20+",
        promoted: true,
        adTrackingId: "cid=14169327~p=6~adgrpid=14169327#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=568926~eid=338929c6-0de5-47f2-8c2c-676e6ffea4e8~srvts=1718299929969~collid=83645",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 8.2,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "8.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-06-13 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "15% OFF",
          subHeader: "UPTO ₹60",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.1",
            ratingCount: "20+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=568926&source=collection&query=North%20Indian",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {Object.entries(restList).map(([key, resObj]) => (
          <RestaurantCard key={key} resObj={resObj} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
};

const App = () => {
  return <AppLayout />;
};

export default App;

