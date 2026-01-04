import { FaFire } from "react-icons/fa";
import Card from "./Card";

const TrendingSection = ({ stays, onCardClick }) => {
  const trendingStays = stays.filter(stay => stay.trending).slice(0, 6);

  if (trendingStays.length === 0) return null;

  return (
    <div className="px-8 py-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 mx-8 rounded-2xl mb-8">
      <div className="flex items-center gap-3 mb-6">
        <FaFire className="text-red-500 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Trending Stays
        </h2>
        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          HOT
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingStays.map((stay) => (
          <div key={stay.id} className="relative">
            <Card stay={stay} onCardClick={onCardClick} />
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <FaFire size={10} />
              TRENDING
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;