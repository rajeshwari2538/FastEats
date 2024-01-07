import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restoList from "../utils/constants";

const Body = () => {

    const [listOfResto,setListOfResto] = useState(restoList);
    const [searchText,setSearchText] = useState("");

    return(
        <div className="body">
            <div className="search">
                <input 
                type="text" 
                placeholder="Search" 
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)}
                /> 
                <button
                onClick={()=>{
                    filtered = listOfResto.filter(res => res.data.name.includes(searchText))
                    setListOfResto(filtered)
                }}
                >Search</button>
            </div>
            <div className="filter-container">
                <button
                   onClick={()=>{
                    filteredData = listOfResto.filter((restaurant) => restaurant.data.avgRating > 4)
                    setListOfResto(filteredData);
                   }}
                >Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {
                    listOfResto.map((resto) => (
                        <RestaurantCard restoData={resto} key={resto.data.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;