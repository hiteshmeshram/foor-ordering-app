const RestaurantCard = ({ name, ratings, cuisines, cloudinaryImageId }) => {
    // console.log(rating)
    return (
      <div className="border outline-black w-64 h-[340px] bg-gray-50 mx-4 mb-6  rounded-lg hover:bg-green-200">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt="res-img"
        />
        <div className="p-4">
          <h2 className="font-bold text-2xl">{name}</h2>
          <h3 className="mt-2">{ratings?.aggregatedRating?.rating} ⭐stars</h3>
          <div className="overflow-hidden max-h-12">
            <h3 className="mt-2 text-sm text-wrap">{cuisines.join(", ")}</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default RestaurantCard;