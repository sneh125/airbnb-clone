import { FaUmbrellaBeach, FaMountain, FaCity, FaHome, FaFire } from "react-icons/fa";

const categories = [
  { id: 'all', name: 'All', icon: FaHome },
  { id: 'beach', name: 'Beach', icon: FaUmbrellaBeach },
  { id: 'mountain', name: 'Mountain', icon: FaMountain },
  { id: 'city', name: 'City', icon: FaCity },
  { id: 'trending', name: 'Trending', icon: FaFire },
];

const CategoryTabs = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="px-8 py-4 border-b dark:border-gray-700">
      <div className="flex gap-8 overflow-x-auto scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex flex-col items-center gap-2 pb-3 border-b-2 transition-colors whitespace-nowrap ${
                isActive
                  ? 'border-red-500 text-red-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;