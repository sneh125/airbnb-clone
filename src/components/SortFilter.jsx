import { FaSort, FaSortAmountDown, FaSortAmountUp, FaStar, FaRandom } from "react-icons/fa";

const sortOptions = [
  { id: 'default', name: 'Default', icon: FaSort },
  { id: 'price-low', name: 'Price: Low to High', icon: FaSortAmountUp },
  { id: 'price-high', name: 'Price: High to Low', icon: FaSortAmountDown },
  { id: 'rating-high', name: 'Rating: High to Low', icon: FaStar },
  { id: 'random', name: 'Random Order', icon: FaRandom },
];

const SortFilter = ({ selectedSort, onSortChange }) => {
  return (
    <div className="px-8 mb-4">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sort by:
        </span>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {sortOptions.map((option) => {
            const Icon = option.icon;
            const isActive = selectedSort === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => onSortChange(option.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all whitespace-nowrap text-sm ${
                  isActive
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300'
                }`}
              >
                <Icon size={12} />
                {option.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortFilter;