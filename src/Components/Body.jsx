import { useEffect, useState } from "react";
// import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Silver_Spoon_API } from "../Config";
import { Link } from "react-router-dom";



const Body = () => {
    const [searchText, setSearchText] = useState(); //returns = [variable name, function to update the variable]
    // const [restaurants, setRestaurants] = useState(restaurantList)
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    function filterData(searchText, allRestaurants) {
        return allRestaurants.filter((restaurants) => restaurants?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    }

    useEffect(() => {
        // API Call
        getRestaurants();
    }, []);



    const getRestaurants = async () => {
        try {

            const response = await fetch(Silver_Spoon_API);
            const json = await response.json();
            console.log("API Response:", json);
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
            setAllRestaurants([]);
            setFilteredRestaurants([]);
        }
    }


    // Conditional Rendering


    return allRestaurants?.length === 0 ? (<Shimmer />) : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => { setSearchText(e.target.value) }}
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
                    return (
                        <Link to={"/restaurant/" + restaurant?.info.id} key={restaurant?.info.id}>
                            <RestaurantCard  {...restaurant?.info} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;