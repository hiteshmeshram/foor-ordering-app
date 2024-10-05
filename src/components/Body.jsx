import { useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState(null);
    const [filteredRestaurants,setFilteredRestaurants]=useState(null);
    const [searchText,setSearchText]=useState("");

    


    useEffect(()=>{
        fetchRestaurantData();
    },[])

    const fetchRestaurantData=async ()=>{
        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(allRestaurants);
    }

    const filterRestaurants=(searchText,allRestaurants)=>{
       
        const data=allRestaurants.filter((res)=>{
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
        return data;
    }

    const topRestaurant=(allRestaurants)=>{
        const data=allRestaurants.filter((restaurant)=>{
           return restaurant.info.avgRating>4.0;
        })

        return data;

    }
    if(filteredRestaurants==null){
        return (<Shimmer/>)
    }
    return (
        <div>
            <div className="m-4 flex justify-center pt-2">
                <input type="text"  onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                }} placeholder="search for Restaurants" className="border border-gray-300 rounded-lg mr-2"></input>
                <button onClick={ ()=>{
                    const data=filterRestaurants(searchText,allRestaurants);
                    setFilteredRestaurants(data);

                } } className="bg-green-100 font-bold rounded-lg px-2 py-1">Search</button>
                <button  className="border border-gray-300 mx-24 bg-green-100 font-bold rounded-lg py-1 px-4" onClick={()=>{
                    const data=topRestaurant(allRestaurants);
                    setFilteredRestaurants(data);
                }}>Top Rated Restaurants</button>
            </div>
            <div className=" p-4 flex flex-wrap m-4">
                {
                    filteredRestaurants.map((restaurant)=>{
                       return  <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  {...restaurant?.info}/></Link>
                    })
                }
                
                
            </div>
                
            
        </div>
    );
}
export default Body;