# 🏠 Airbnb Clone - React + Tailwind CSS

<div align="center">

![Airbnb Clone](https://img.shields.io/badge/Airbnb-Clone-FF5A5F?style=for-the-badge&logo=airbnb&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A pixel-perfect, fully responsive Airbnb clone with advanced features**

[🚀 Live Demo](https://your-demo-link.vercel.app) • [📖 Documentation](#features) • [🐛 Report Bug](https://github.com/yourusername/airbnb-clone/issues)

</div>

## ✨ Features

### 🎨 **UI/UX Excellence**
- 🎯 **Pixel-perfect Design** - Matches Airbnb's design language
- 🌙 **Dark Mode Toggle** - Seamless light/dark theme switching with persistence
- 📱 **Fully Responsive** - Works flawlessly on all device sizes
- ⚡ **Skeleton Loading** - Professional loading animations
- 🎭 **Smooth Animations** - Hover effects, transitions, and micro-interactions

### 🔍 **Advanced Filtering System**
- 🏖️ **Category Filters** - Beach, Mountain, City, Trending properties
- 🌍 **Country Filter** - India vs International locations
- 💰 **Price Range Slider** - ₹2,000 - ₹20,000 dynamic filtering
- 🔤 **Smart Search** - Search by location or property name
- 📊 **Multiple Sort Options** - Price, Rating, Random order

### 🏠 **Property Management**
- 🏡 **26 Unique Properties** - Mix of India and international locations
- ❤️ **Wishlist System** - Heart icon favorites with state management
- 📄 **Detailed Property Pages** - Full property information with booking form
- 🔥 **Trending Section** - Special highlighted trending properties
- ∞ **Infinite Scroll** - Load more properties as you scroll

### 🛠️ **Technical Features**
- ⚛️ **React Router** - Multi-page navigation with dynamic routing
- 💾 **State Persistence** - localStorage for user preferences
- 🎲 **Random Shuffle** - "Surprise Me" functionality
- 🏷️ **Filter Tags** - Visual active filter indicators
- 🚀 **Performance Optimized** - Lazy loading and efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/airbnb-clone.git
cd airbnb-clone

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Card.jsx        # Property card component
│   ├── Navbar.jsx      # Navigation with search & dark mode
│   ├── CategoryTabs.jsx # Category filter tabs
│   ├── PriceFilter.jsx # Price range slider
│   ├── SortFilter.jsx  # Sort options
│   └── SkeletonCard.jsx # Loading skeleton
├── pages/              # Page components
│   ├── Home.jsx        # Main home page
│   └── PropertyDetails.jsx # Property detail page
├── data/               # Static data
│   └── stays.js        # Property data (26 properties)
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🌟 Key Components

### 🏠 Property Cards
- High-quality images from Unsplash
- Property details (title, location, price, rating)
- Hover animations and wishlist functionality
- Click to view detailed property page

### 🔍 Advanced Filters
- **Category Tabs**: Beach, Mountain, City, Trending
- **Country Filter**: India vs International properties  
- **Price Slider**: Dynamic range from ₹2,000 to ₹20,000
- **Sort Options**: Default, Price (Low→High), Price (High→Low), Rating, Random
- **Search Bar**: Real-time search by location or property name

### 📱 Responsive Design
- **Mobile**: 1 column layout
- **Tablet**: 2-3 columns  
- **Desktop**: 4 columns
- **Large Desktop**: Optimized spacing

## 🎯 Featured Properties

### 🇮🇳 **India (15 Properties)**
- Luxury Beach Villa, Goa - ₹7,500
- Mountain View Cabin, Manali - ₹5,800
- Desert Luxury Camp, Jaisalmer - ₹6,200
- Kerala Backwater Houseboat - ₹5,100
- Rajasthan Palace Hotel, Udaipur - ₹9,000
- Tea Garden View Cottage, Munnar - ₹5,400
- Royal Heritage Haveli, Jaipur - ₹8,800
- And more...

### 🌍 **International (11 Properties)**  
- Nordic Snow Glass Igloo, Finland - ₹17,000
- Desert Glass Dome Stay, Dubai - ₹15,000
- New York Penthouse - ₹15,000
- Santorini White House - ₹13,500
- Swiss Lake House, Switzerland - ₹12,000
- Island Bamboo Villa, Bali - ₹11,000
- And more...

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **State Management**: React Hooks (useState, useEffect)
- **Persistence**: localStorage
- **Build Tool**: Vite
- **Package Manager**: npm

## 📊 Performance Features

- ⚡ **Fast Loading** - Vite for lightning-fast development
- 🖼️ **Lazy Loading** - Images load as needed
- 💾 **State Persistence** - User preferences saved locally
- 🔄 **Efficient Rendering** - Optimized React components
- 📱 **Mobile Optimized** - Touch-friendly interactions

## 🎨 Design System

- **Colors**: Red primary (#EF4444), Gray neutrals
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent 8px grid system
- **Shadows**: Subtle elevation for depth
- **Animations**: 300ms transitions for smooth interactions

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json:
# "homepage": "https://yourusername.github.io/airbnb-clone"
# "deploy": "gh-pages -d dist"
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from [Airbnb](https://airbnb.com)
- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Contact

**Your Name** - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/airbnb-clone](https://github.com/yourusername/airbnb-clone)

---

<div align="center">

**⭐ Star this repo if you found it helpful! ⭐**

Made with ❤️ and React

</div>