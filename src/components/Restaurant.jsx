import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addItem } from '../utils/cartSlice';

const Restaurant = () => {
  const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const [resMenu,setResMenu]=useState([]);
    
    const dispatch=useDispatch();

    const handleButton=(item)=>{
      // console.log("btn clicked")
      dispatch(addItem(item))
      // console.log(item);
    };
   


    useEffect(()=>{
      fetchRestaurantInfo();
    },[])

    const fetchRestaurantInfo=async ()=>{
      const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId="+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
     
      const json=await data.json();
      // console.log(json);
      setResInfo(json?.data);
      console.log(json?.data)

      // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
      setResMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    
    if(resInfo===null) return null;

    const {name,avgRating,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
   
       console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
   
  return (
  
    <div className=' flex justify-center items-center flex-col'>
        <div className='w-1/2 border border-gray-400 m-4 pb-4 shadow-2xl shadow-slate-300 rounded-3xl'>
            <h1 className='font-bold text-2xl m-4 p-2'>{name}</h1>
            <h3 className='mx-4 font-bold '>⭐ {avgRating}   -{costForTwoMessage}</h3>
            <h3 className='mx-5  text-red-500'>{cuisines.join(",")}</h3>
      </div>
    {resMenu &&
    <div className='w-1/2  rounded-2xl shadow-md'>
          <h1 className='m-4 font-bold text-2xl'>Menu</h1>
        
            
          {resMenu.map((item)=>{
            return <div className='mx-4 flex my-10 border-b-2 '>
              <div className='w-3/4'>
                    <h3>🍽</h3>
                    <h3 className='font-bold'>{item?.card?.info?.name}</h3>
                  <h3 className='mb-2 font-bold'>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</h3>
                  <h3 className='mb-8'>{item?.card?.info?.description}</h3>
              </div>
              <div className='m-8'><img className='rounded-3xl w-32 h-32' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.card?.info?.imageId} alt="menu-img"></img>
              <button onClick={()=>handleButton(item)} className='absolute border border-black mx-4 mb-4 px-8 py-1 rounded-xl text-green-600 font-bold'>ADD</button>
              </div>
            </div>
           
          })}
        
          
    

    </div>}
    </div>
  )
}

export default Restaurant