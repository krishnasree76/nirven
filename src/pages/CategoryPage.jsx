import React, { useState, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, Filter, X, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '../components/Cards';
import { PRODUCTS, CATEGORIES } from '../data/products';

const CategoryPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState(100);
  const [offersOnly, setOffersOnly] = useState(false);

  const category = CATEGORIES.find(c => c.id === id);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (id) {
      result = result.filter(p => p.category === id);
    }

    if (query) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (offersOnly) {
      result = result.filter(p => p.in_offer);
    }

    result = result.filter(p => p.price <= priceRange);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [id, query, sortBy, priceRange, offersOnly]);

  return (
    <div className="container pt-40 pb-40">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-4"
        >
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Aura of Freshness</span>
             <div className="w-8 h-[1px] bg-secondary/30" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-primary leading-none">
            {query ? `Search: ${query}` : category ? category.name : 'Exclusive Shop'}
          </h1>
          <p className="text-primary/40 text-sm font-bold tracking-widest uppercase">
            {filteredProducts.length} Premium results found
          </p>
        </motion.div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary/10 rounded-2xl font-black text-primary text-xs uppercase tracking-widest"
          >
            <SlidersHorizontal size={18} /> Filters
          </button>
          
          <div className="relative flex-1 md:w-72 group">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-white/40 border-2 border-primary/5 rounded-2xl pl-6 pr-12 py-4 focus:outline-none focus:border-primary/20 font-black text-xs uppercase tracking-widest text-primary cursor-pointer transition-all hover:bg-white/80"
            >
              <option value="popular">Most Popular Selection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated Boutique</option>
            </select>
            <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-primary/40 pointer-events-none group-hover:text-primary transition-colors" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Sidebar Filter - Desktop */}
        <aside className="hidden lg:block lg:col-span-3 space-y-12 h-fit">
          <div className="space-y-10">
            <div className="flex items-center justify-between pb-6 border-b border-primary/10">
               <h3 className="text-xl font-black text-primary flex items-center gap-3">
                  Filters
               </h3>
               <button onClick={() => { setPriceRange(100); setOffersOnly(false); }} className="text-[10px] font-black text-primary/30 hover:text-primary uppercase tracking-widest transition-all">Reset All</button>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-6">
                <label className="text-[10px] font-black text-primary/40 uppercase tracking-widest block">Price Ceiling (Up to £{priceRange})</label>
                <div className="relative pt-2">
                   <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-primary/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] font-black text-primary/20 mt-4 uppercase tracking-tighter">
                    <span>£1</span>
                    <span>£100</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/5">
                <label className="flex items-center gap-4 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${offersOnly ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-white border-primary/10'}`}>
                    {offersOnly && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={offersOnly}
                    onChange={() => setOffersOnly(!offersOnly)}
                  />
                  <span className={`text-sm font-black transition-all ${offersOnly ? 'text-primary' : 'text-primary/40 group-hover:text-primary'}`}>Offers Only Special</span>
                </label>
              </div>

              <div className="pt-10 border-t border-primary/5">
                <h4 className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-8">Quick Navigation</h4>
                <div className="flex flex-col gap-4">
                  {CATEGORIES.map(cat => (
                    <Link 
                      key={cat.id} 
                      to={`/category/${cat.id}`}
                      className="group flex items-center justify-between"
                    >
                      <span className={`text-lg font-black transition-all ${id === cat.id ? 'text-primary' : 'text-gray-300 group-hover:text-primary group-hover:translate-x-1'}`}>
                        {cat.name}
                      </span>
                      {id === cat.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="lg:col-span-9">
          <AnimatePresence mode='wait'>
            {filteredProducts.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="product-grid"
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-40 text-center space-y-8 glass-card border-none bg-primary/5 rounded-[40px] px-10"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
                  <Search size={32} className="text-primary/20" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-primary">Nothing found, for now.</h3>
                  <p className="text-primary/40 font-bold max-w-xs mx-auto">Try adjusting your premium filters or explore other categories.</p>
                </div>
                <button 
                  onClick={() => { setPriceRange(100); setOffersOnly(false); }}
                  className="btn-primary !rounded-full !py-4 !px-8 text-sm uppercase tracking-widest inline-flex"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Filter Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-primary/40 backdrop-blur-md" 
               onClick={() => setIsSidebarOpen(false)} 
            />
            <motion.div 
               initial={{ x: '-100%' }}
               animate={{ x: 0 }}
               exit={{ x: '-100%' }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="absolute inset-y-0 left-0 w-[90%] max-w-sm bg-white p-12 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <h3 className="text-3xl font-black text-primary">Filters</h3>
                <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-gray-50 rounded-2xl"><X size={24} /></button>
              </div>
              
              <div className="flex-1 space-y-12">
                 <div className="space-y-6">
                   <label className="text-[10px] font-black text-primary/40 uppercase tracking-widest block">Price Range (up to £{priceRange})</label>
                   <input 
                      type="range" 
                      min="1" 
                      max="100" 
                      value={priceRange} 
                      onChange={(e) => setPriceRange(parseInt(e.target.value))} 
                      className="w-full accent-primary h-2 bg-primary/10 rounded-full" 
                   />
                 </div>
                 
                 <div className="pt-6 border-t border-gray-100">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${offersOnly ? 'bg-primary border-primary' : 'border-primary/10'}`}>
                         {offersOnly && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                      <input type="checkbox" className="hidden" checked={offersOnly} onChange={() => setOffersOnly(!offersOnly)} />
                      <span className="text-lg font-black text-primary">Special Offers only</span>
                    </label>
                 </div>
              </div>

              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="w-full btn-primary py-5 rounded-[24px] mt-10 text-lg shadow-xl shadow-primary/20"
              >
                Apply Boutique Filters
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryPage;
