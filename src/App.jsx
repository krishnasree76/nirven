import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';
import { ShoppingBag, ShoppingCart, Home as HomeIcon, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Sticky Mobile Bottom Bar - Premium Dock
const MobileBottomBar = () => {
  const { cartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-6 flex justify-center">
      <div className="w-full max-w-sm glass-card bg-white/80 backdrop-blur-3xl border-white/40 py-3 px-8 flex justify-between items-center shadow-[0_30px_60px_rgba(27,60,26,0.15)] ring-1 ring-black/5">
        <Link 
          to="/" 
          className={`flex flex-col items-center gap-1 transition-all duration-500 ${isActive('/') ? 'text-primary scale-110' : 'text-primary/20 hover:text-primary/40'}`}
        >
          <HomeIcon size={22} strokeWidth={isActive('/') ? 3 : 2} />
          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Boutique</span>
        </Link>
        
        <Link 
          to="/cart" 
          className="relative bg-primary text-white p-5 rounded-[24px] -mt-10 shadow-[0_20px_40px_rgba(27,60,26,0.25)] border-4 border-white active:scale-95 transition-all group overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <ShoppingCart size={24} strokeWidth={2.5} className="relative z-10" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-secondary text-primary text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-xl animate-bounce">
              {cartCount}
            </span>
          )}
        </Link>
        
        <Link 
          to="/profile" 
          className={`flex flex-col items-center gap-1 transition-all duration-500 ${isActive('/profile') || isActive('/auth') ? 'text-primary scale-110' : 'text-primary/20 hover:text-primary/40'}`}
        >
          <UserIcon size={22} strokeWidth={isActive('/profile') || isActive('/auth') ? 3 : 2} />
          <span className="text-[8px] font-black uppercase tracking-[0.2em]">Profile</span>
        </Link>
      </div>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/search" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/offers" element={<CategoryPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
          <Footer />
          <MobileBottomBar />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
