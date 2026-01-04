import { useState, useEffect } from 'react';
import Card from './Card';
import SkeletonCard from './SkeletonCard';

const InfiniteScroll = ({ stays, onCardClick }) => {
  const [displayedStays, setDisplayedStays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 8;

  useEffect(() => {
    // Reset when stays change
    setDisplayedStays(stays.slice(0, itemsPerPage));
    setHasMore(stays.length > itemsPerPage);
  }, [stays]);

  const loadMore = () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const currentLength = displayedStays.length;
      const nextItems = stays.slice(currentLength, currentLength + itemsPerPage);
      
      setDisplayedStays(prev => [...prev, ...nextItems]);
      setHasMore(currentLength + nextItems.length < stays.length);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore, displayedStays.length]);

  return (
    <div className="px-8 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedStays.map((stay) => (
          <Card key={stay.id} stay={stay} onCardClick={onCardClick} />
        ))}
        
        {loading && (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))
        )}
      </div>
      
      {!hasMore && displayedStays.length > 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            You've seen all {stays.length} properties! 🎉
          </p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;