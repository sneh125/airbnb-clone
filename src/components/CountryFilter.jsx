import { FaGlobe, FaFlag } from "react-icons/fa";

const CountryFilter = ({ selectedCountry, onCountryChange }) => {
  const countries = [
    { id: 'all', name: 'All Countries', icon: FaGlobe },
    { id: 'India', name: 'India', icon: FaFlag },
    { id: 'Abroad', name: 'International', icon: FaGlobe },
  ];

  return (
    <div className="px-8 py-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {countries.map((country) => {
          const Icon = country.icon;
          const isActive = selectedCountry === country.id;
          
          return (
            <button
              key={country.id}
              onClick={() => onCountryChange(country.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300'
              }`}
            >
              <Icon size={14} />
              <span className="text-sm font-medium">{country.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CountryFilter;