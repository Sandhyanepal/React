import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    // costForTwo,
    avgRating,
}) => {
    return (
        <div className="card">
            {/* <img src={"https://media-assets.swiggy.com/swiggy/" + cloudinaryImageId} /> */}
            <img src={ IMG_CDN_URL + cloudinaryImageId} />
            <div className='card-details'>
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h4>{area}</h4>
                <h4>
                    <i class="fa-solid fa-star"></i>
                    {avgRating}
                </h4>
            </div>
            {/* <h4>{costForTwo}</h4> */}

        </div>
    );
};

export default RestaurantCard;