import { useEffect, useState } from "react";
// import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [searchText, setSearchText] = useState(); //returns = [variable name, function to update the variable]
    // const [restaurants, setRestaurants] = useState(restaurantList)
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    function filterData(searchText, allRestaurants){
        return allRestaurants.filter((restaurants) => restaurants?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    }

    useEffect(() => {
        // API Call
        getRestaurants();
      }, []);



    async function getRestaurants() {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            console.log("API Response:", json);
            const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
            setAllRestaurants([]);
        }
    }


    // Conditional Rendering


    return allRestaurants?.length === 0 ? (<Shimmer/>) : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                    />
                <button className="search-btn"
                    onClick={() => {
                        // need to filter data
                        const data = filterData(searchText, allRestaurants);
                        // update the state -resturants
                        setFilteredRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {filteredRestaurants?.map((restaurant) => {
                    return <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />;
                })}
            </div>
        </>
    );
};

export default Body;