

const RestaurantCard = (props) => {
    const {restoData} = props;
    return (
        <div className="resto-card">
            <img 
            className="resto-img" alt="resto-logo"
            src={restoData.data.img}/>
            <h3>{restoData.data.name}</h3>
            <h4>{restoData.data.cuisines.join(", ")}</h4>
            <h4>{restoData.data.avgRating} Stars</h4>
            <h4>₹{restoData.data.costForTwo} For Two</h4>
            <h4>{restoData.data.delivaryIn} mins</h4>
        </div>
    )
}

export default RestaurantCard;