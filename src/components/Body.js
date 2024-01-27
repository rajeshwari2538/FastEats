import { useState,useEffect, useContext } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [listOfResto,setListOfResto] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredResto,setFilteredResto] = useState([]);

    const {setUserName} = useContext(UserContext)

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9143044&lng=77.58702079999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        //console.log(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
         setListOfResto(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilteredResto(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfResto.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="container flex p-4 justify-center">
                <div className="search">
                    <input 
                    type="text" 
                    className="border border-black bg-gray-100 m-4 rounded-sm"
                    placeholder="Search" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                    /> 
                    <button
                    className="bg-green-200 px-4 rounded-lg "
                    onClick={()=>{
                        filtered = listOfResto.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredResto(filtered);
                    }}
                    >Search</button>
                </div>
                <div className="filter-container">
                    <button
                    className="bg-gray-200 m-4 px-4 rounded-lg"
                    onClick={()=>{
                        filteredData = listOfResto.filter((restaurant) => restaurant.info.avgRating > 4)
                        setListOfResto(filteredData);
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="m-4 px-4 ">
                    <label>User Name: </label>
                    <input className="border border-black mx-2" onChange={(e) => setUserName(e.target.value)} />  
                </div>
            </div>
            
            <div className="restaurant-container flex flex-wrap ml-20 mt-6">
                {
                    filteredResto.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {restaurant.info.promoted ? 
                            <RestaurantCardPromoted restoData={restaurant} /> : 
                            <RestaurantCard restoData={restaurant}/>}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;