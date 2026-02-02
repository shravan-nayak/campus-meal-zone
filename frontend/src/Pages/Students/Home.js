

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../Components/LogoutButton';
import MenuPage from './MenuPage';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab-1');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    
    // Set up an event listener for storage changes
    const handleStorageChange = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const goToCheckout = () => {
    navigate('/Students/CheckoutPage');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        {/* Navigation content - unchanged */}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <i className="fa fa-utensils text-2xl text-amber-500 mr-2"></i>
              <h1 className="text-2xl font-bold"  style={{color:'white'}}>Campus Meal Zone</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/Students/Home" className="font-medium hover:text-amber-400 border-b-2 border-amber-500">Home</a>
              <a href="/Students/About" className="font-medium hover:text-amber-400">About</a>
              <a href="/Students/MenuItemPage" className="font-medium hover:text-amber-400">Items</a>
              <a href="/Students/CheckoutPage" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded">Check Out</a>
              <LogoutButton className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded" />
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <i className={`fa fa-${isMenuOpen ? 'times' : 'bars'} text-xl`}></i>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-gray-800 pb-4">
              <div className="flex flex-col space-y-2 px-4">
                <a href="/Students/Home" className="font-medium py-2 border-b border-gray-700">Home</a>
                <a href="/Students/About" className="font-medium py-2 border-b border-gray-700">About</a>
                <a href="/Students/MenuItemPage" className="font-medium py-2 border-b border-gray-700">Items</a>
                <a href="menu.html" className="font-medium py-2 border-b border-gray-700">Menu</a>
                <div className="py-2 border-b border-gray-700">
                  <button className="font-medium flex items-center justify-between w-full">
                    Pages <i className="fa fa-chevron-down text-xs"></i>
                  </button>
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="booking.html" className="block py-1 text-gray-300 hover:text-white">Booking</a>
                    <a href="team.html" className="block py-1 text-gray-300 hover:text-white">Our Team</a>
                    <a href="testimonial.html" className="block py-1 text-gray-300 hover:text-white">Testimonial</a>
                  </div>
                </div>
                <a href="contact.html" className="font-medium py-2">Contact</a>
                <div className="flex space-x-2 pt-2">
                  <a href="#" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded flex-1 text-center">Book A Table</a>
                  <LogoutButton className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded flex-1 text-center" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - unchanged */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Enjoy Our<br />Delicious Meal
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Discover the taste of authentic cuisine. Indulge in our carefully crafted menu, featuring a variety of dishes made with the freshest ingredients.              </p>
              <div className="flex space-x-4">
                <a href="/Students/MenuItemPage" className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded transition duration-300">
                  View All Items
                </a>
                
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/img/hero.png" 
                alt="Delicious Meal" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - unchanged */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-user-tie"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Master Chefs</h3>
              <p className="text-gray-600">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-utensils"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-cart-plus"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Online Order</h3>
              <p className="text-gray-600">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
              <div className="text-amber-500 text-4xl mb-4">
                <i className="fa fa-headset"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section - unchanged */}
      <div className="py-16 bg-gray-50">
        {/* About content - removed for brevity */}
      </div>

      {/* Menu Section */}
      <MenuPage />

      {/* Cart Button */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={goToCheckout}
            className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300 flex items-center"
          >
            <i className="fa fa-shopping-cart mr-2"></i>
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>
      )}

<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
              <a className="btn btn-link" href="/Students/Home">Home</a>
              <a className="btn btn-link" href="/Students/About">About</a>
              <a className="btn btn-link" href="/Students/MenuItemPage">Items</a>
              <a className="btn btn-link" href="/Students/CheckoutPage">Checkout</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Brahmavar, Udupi</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 97 345 67890</p>
              <p className="mb-2"><i className="fa fa-envelope me-3" />info@cafe.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube" /></a>
                <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
              <h5 className="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 05PM</p>
              <h5 className="text-light fw-normal">Sunday</h5>
              <p>Holiday</p>
            </div>
         
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                © <a className="border-bottom" href="#">Campus Meal Zone-Cafe</a>, All Right Reserved. 
                {/*/*** This template is free as long as you keep the footer author's credit link/attribution link/backlink. If you'd like to use the template without the footer author's credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                Designed By <a className="border-bottom" href="">Team VGI</a><br /><br />
              
              </div>
              <div className="col-md-6 text-center text-md-end">
               
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Home;