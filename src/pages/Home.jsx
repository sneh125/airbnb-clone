import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stays from "../data/stays";
import Card from "../components/Card";
import PriceFilter from "../components/PriceFilter";
import CategoryTabs from "../components/CategoryTabs";
import SortFilter from "../components/SortFilter";

const Home = ({ search, price, setPrice }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('default');

  // Simple filter logic
  const getFilteredStays = () => {
    return stays.filter((stay) => {
      const matchesSearch = stay.location.toLowerCase().includes(search.toLowerCase()) ||
                           stay.title.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = stay.price <= price;
      const matchesCategory = selectedCategory === 'all' || stay.category === selectedCategory;
      
      return matchesSearch && matchesPrice && matchesCategory;
    });
  };

  const filteredStays = getFilteredStays();

  const handleCardClick = (stay) => {
    navigate(`/property/${stay.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <CategoryTabs 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <PriceFilter price={price} setPrice={setPrice} />
      
      <SortFilter 
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      
      <div className="px-8 pb-8">
        {filteredStays.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No properties found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or filters
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredStays.length} {filteredStays.length === 1 ? 'property' : 'properties'} found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStays.slice(0, 12).map((stay) => (
                <Card 
                  key={stay.id} 
                  stay={stay} 
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;