const SkeletonCard = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      {/* Image Skeleton */}
      <div className="animate-pulse h-64 bg-gray-300 dark:bg-gray-600 rounded-t-xl"></div>
      
      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Title Skeleton */}
        <div className="animate-pulse h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        
        {/* Location Skeleton */}
        <div className="animate-pulse h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        
        {/* Price Skeleton */}
        <div className="animate-pulse h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;