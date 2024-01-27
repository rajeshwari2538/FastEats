import { useEffect,useState } from "react";
import {Shimmer} from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/common";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const [showIndex,setShowIndex] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer />
    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category,index)=>
             <RestaurantCategory 
              key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantMenu;