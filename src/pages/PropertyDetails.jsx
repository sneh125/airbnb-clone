import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaHeart, FaShare, FaWifi, FaParking, FaSwimmingPool, FaUtensils } from 'react-icons/fa';
import stays from '../data/stays';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const stay = stays.find(s => s.id === parseInt(id));

  if (!stay) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Property not found
          </h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: FaWifi, name: 'Free WiFi' },
    { icon: FaParking, name: 'Free Parking' },
    { icon: FaSwimmingPool, name: 'Swimming Pool' },
    { icon: FaUtensils, name: 'Kitchen' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaArrowLeft />
              <span>Back to listings</span>
            </button>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaShare />
                <span>Share</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Title & Rating */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {stay.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="font-semibold">4.8</span>
              <span>(124 reviews)</span>
            </div>
            <span>•</span>
            <span>{stay.location}, India</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="mb-8">
              <img
                src={stay.image}
                alt={stay.title}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            {/* Property Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                About this place
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Experience luxury and comfort in this beautifully designed {stay.title.toLowerCase()}. 
                Perfect for travelers seeking a memorable stay with modern amenities and stunning views. 
                The space features contemporary furnishing, high-speed internet, and is located in the heart of {stay.location}.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center py-4 border-t border-b dark:border-gray-700">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">4</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Guests</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">2</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Bedrooms</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">2</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Bathrooms</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                What this place offers
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-900 dark:text-white">{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ₹{stay.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400"> / night</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" size={14} />
                  <span className="font-semibold">4.8</span>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border dark:border-gray-600 rounded-lg p-3">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                      Check-in
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent text-gray-900 dark:text-white outline-none"
                    />
                  </div>
                  <div className="border dark:border-gray-600 rounded-lg p-3">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                      Check-out
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-transparent text-gray-900 dark:text-white outline-none"
                    />
                  </div>
                </div>
                
                <div className="border dark:border-gray-600 rounded-lg p-3">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    Guests
                  </label>
                  <select className="w-full bg-transparent text-gray-900 dark:text-white outline-none">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors mb-4">
                Reserve
              </button>

              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                You won't be charged yet
              </p>

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">₹{stay.price.toLocaleString()} × 5 nights</span>
                  <span className="text-gray-900 dark:text-white">₹{(stay.price * 5).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Service fee</span>
                  <span className="text-gray-900 dark:text-white">₹{Math.round(stay.price * 0.1).toLocaleString()}</span>
                </div>
                <hr className="dark:border-gray-600" />
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">₹{(stay.price * 5 + Math.round(stay.price * 0.1)).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;