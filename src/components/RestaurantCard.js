import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
    const {restoData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = restoData?.info;
    return (
        <div className="resto-card w-[250px] p-4 bg-gray-100 hover:bg-gray-200 rounded-lg">
            <img 
            className="resto-img rounded-lg p-1 " alt="resto-logo"
            src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;