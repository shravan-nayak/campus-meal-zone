

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useCart from './useCart'; // Adjust the path as needed

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [categorizedItems, setCategorizedItems] = useState({});
  const { cart, addToCart, cartCount } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/item/items-by-category');
        
        // Store the categorized items directly
        setCategorizedItems(response.data);
        
        // Extract category names
        const categoryNames = Object.keys(response.data);
        setCategories(categoryNames);
        
        // Set the first category as active by default
        if (categoryNames.length > 0 && !activeCategory) {
          setActiveCategory(categoryNames[0]);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    
    fetchItems();
  }, [activeCategory]);

  const goToCheckout = () => {
    navigate('/Students/CheckoutPage');
  };

  // Get category icon based on index or name
  const getCategoryIcon = (category, index) => {
    // You can customize this logic based on your needs
    const icons = {
      'Breakfast': 'coffee',
      'Lunch': 'hamburger',
      'Dinner': 'utensils',
      'Snacks': 'cookie',
      'Beverages': 'glass-whiskey',
      'Desserts': 'ice-cream'
    };
    
    return icons[category] || ['coffee', 'hamburger', 'utensils', 'pizza-slice', 'bread-slice'][index % 5] || 'utensils';
  };

  // Get subtitle based on index or category
  const getCategorySubtitle = (category, index) => {
    const subtitles = {
      'Breakfast': 'Popular',
      'Lunch': 'Special',
      'Dinner': 'Lovely',
      'Snacks': 'Tasty',
      'Beverages': 'Refreshing',
      'Desserts': 'Sweet'
    };
    
    return subtitles[category] || ['Popular', 'Special', 'Lovely', 'Tasty', 'Fresh'][index % 5] || 'Delicious';
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-amber-500 font-medium mb-2">Food Menu</h5>
          <h1 className="text-3xl font-bold">Most Popular Items</h1>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category, index) => (
              <button 
                key={category}
                className={`flex items-center px-6 py-3 rounded-lg whitespace-nowrap ${activeCategory === category ? 'bg-white shadow-md' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                <i className={`fa fa-${getCategoryIcon(category, index)} text-amber-500 text-xl mr-3`}></i>
                <div>
                  <div className="text-xs text-gray-500">{getCategorySubtitle(category, index)}</div>
                  <div className="font-medium">{category}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categorizedItems[activeCategory]?.map((item, index) => (
            <div key={item?.item_id || index} className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center transition duration-300 hover:shadow-md">
              <img 
                src={item?.item_image ? `http://localhost:5000/${item.item_image}` : `/img/menu-${index + 1}.jpg`} 
                alt={item?.item_name || `Menu item ${index + 1}`} 
                className="w-20 h-20 rounded-lg object-cover mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                  <h3 className="font-medium">{item?.item_name || "Food Item"}</h3>
                  <span className="text-amber-500 font-medium">₹{item?.item_price || 115}</span>
                </div>
                <p className="text-sm text-gray-500 italic">{item?.item_description || "Delicious food description"}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-1 px-3 rounded text-sm transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          
          {/* If no items in the selected category */}
          {(!categorizedItems[activeCategory] || categorizedItems[activeCategory].length === 0) && (
            <div className="col-span-2 text-center py-8">
              <p className="text-gray-500">No items available in this category.</p>
            </div>
          )}
        </div>
        
        {/* Cart Button */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <button 
              onClick={goToCheckout}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
            >
              <i className="fa fa-shopping-cart mr-2"></i>
              Cart ({cartCount})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;