import { useEffect,useState } from "react";
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Loading from "./Loading";
import Header from "./Header";
const Body=()=>{
    const [allRestaurants,setAllRestaurants]=useState(null);
    const [filteredRestaurants,setFilteredRestaurants]=useState(null);
    const [searchText,setSearchText]=useState("");
    const [whatsonyourmind,setwhatsonyourmind] = useState(null)

    useEffect(()=>{
        fetchRestaurantData();
    },[])

    const fetchRestaurantData = async ()=>{ 
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setwhatsonyourmind(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
        
    }

    //<img class="sc-bXCLTC erbfWI" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/10/3/4b2bf911-8dd6-4f61-9c34-d6cb19ebd719_Vratspecialsdurgapujafasting.png" width="144" height="180" alt="restaurants curated festival"></img>
    const filterRestaurants=(searchText,allRestaurants)=>{
        const data=allRestaurants.filter((res)=>{
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
        return data;
    }

    const topRestaurant=(allRestaurants)=>{
        const data=allRestaurants.filter((restaurant)=>{
           return restaurant.info.avgRating>4.4;
        })

        return data;

    }
    if(filteredRestaurants==null){
        return (
            <div>
                <Loading/>
                
            </div>
        )
    }
    return (
        <div>
            <div className="m-4 flex justify-center pt-2">
                <input type="text"
                  onChange={(e)=>{
                    setSearchText(e.target.value);
                    
                }} placeholder="search for Restaurants" className="border border-gray-300 px-4 focus:border-gray-300 rounded-lg mr-2"></input>
                <button onClick={ ()=>{
                    const data=filterRestaurants(searchText,allRestaurants);
                    setFilteredRestaurants(data);

                } } className="bg-green-100 font-semibold rounded-lg px-2 py-1">Search</button>
                <button  className="border border-gray-300 mx-24 bg-green-100 font-semibold rounded-lg py-1 px-4" onClick={()=>{
                    const data=topRestaurant(allRestaurants);
                    setFilteredRestaurants(data);
                }}>Top Rated Restaurants</button>
                
            </div>
            <div className='px-[13%] text-2xl font-bold'>
                    What's on your mind?
                    <div className='flex overflow-x-scroll'>
                        
                        {whatsonyourmind.map((item)=>{
                            return <div className='flex min-w-32'>
                                <img alt='image ' className='w-full' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item?.imageId}></img>
                            </div>
                        })}
                    </div>
            </div>
            <div className=" pt-5 px-[5%] flex flex-wrap justify-center mt-5">
           
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