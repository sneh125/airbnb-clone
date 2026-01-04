const PriceFilter = ({ price, setPrice }) => {
  return (
    <div className="px-8 mt-6 mb-4">
      <div className="max-w-md">
        <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Max Price: ₹{price.toLocaleString()} / night
        </label>
        <input
          type="range"
          min="2000"
          max="20000"
          step="500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
        />
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
          <span>₹2,000</span>
          <span>₹20,000</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;