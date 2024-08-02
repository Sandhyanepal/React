import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Silver_Spoon_Menu_API } from '../Config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    const getRestaurantInfo = async ()  => {
        const data = await fetch(Silver_Spoon_Menu_API + id);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data)
    }

  return !restaurant ? (<Shimmer/>) : (
    <div>
      <h1>Restaurant id: {id}</h1>

    </div>
  )
}

export default RestaurantMenu
