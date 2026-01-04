import { FaStar, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Card = ({ stay, onCardClick }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.stopPropagation(); // Prevent card click when clicking heart
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div 
      className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer dark:bg-gray-800 bg-white shadow-lg hover:shadow-xl group"
      onClick={() => onCardClick && onCardClick(stay)}
    >
      <div className="relative overflow-hidden">
        <img
          src={stay.image}
          alt={stay.title}
          className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-md flex items-center gap-1">
          <FaStar className="text-yellow-500" size={12} />
          <span className="text-xs font-semibold">4.8</span>
        </div>
        
        {/* Wishlist Heart */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md"
        >
          <FaHeart 
            className={`transition-colors ${
              isWishlisted ? 'text-red-500' : 'text-gray-400'
            }`} 
            size={16} 
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 line-clamp-1">
          {stay.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
          {stay.location}, India
        </p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-900 dark:text-white">
            ₹{stay.price.toLocaleString()} / night
          </p>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;