import { useState } from "react";
import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [searchText, setSearchText] = useState(); //returns = [variable name, function to update the variable]
    const [restaurants, setRestaurants] = useState(restaurantList)

    function filterData(searchText, restaurants){
        return restaurants.filter((restaurants) => restaurants.data.name.includes(searchText));
    }

    return (
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
                        const data = filterData(searchText, restaurants);
                        // update the state -resturants
                        setRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </>
    );
};

export default Body;