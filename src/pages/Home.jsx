import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, ShieldCheck, Clock, ChevronRight, Leaf, Star, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductCard, CategoryCard, CategorySquareCard } from '../components/Cards';
import { CATEGORIES, PRODUCTS } from '../data/products';

const Home = () => {
  const offerProducts = PRODUCTS.filter(p => p.in_offer).slice(0, 4);

  return (
    <div className="space-y-40 pb-40">
      {/* Hero Section - The WOW Factor */}
      <section className="relative min-h-[100vh] flex items-center pt-40 md:pt-32 pb-20 overflow-hidden">
        {/* Mesh Background Decor */}
        <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-primary/30" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40">Established in London</span>
                <div className="w-12 h-[2px] bg-primary/30" />
              </div>

              <h1 className="text-5xl md:text-8xl font-black leading-[0.9] text-primary">
                Freshness <br />
                <span className="text-secondary italic font-light serif text-6xl md:text-9xl">Redefined.</span>
              </h1>

              <p className="text-xl text-primary/60 max-w-lg leading-relaxed font-medium">
                Bringing the finest organic harvests and authentic spices
                directly to your kitchen. Pure, untouched, and strictly natural.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/category/fruits-veg" className="btn-primary group !rounded-full py-5 px-10 text-xl shadow-2xl shadow-primary/20">
                  <span>Start Exploring</span>
                  <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
                </Link>
                <Link to="/offers" className="flex items-center justify-center gap-3 text-lg font-black text-primary hover:gap-5 transition-all">
                  <span>Limited Offers</span>
                  <ChevronRight size={24} strokeWidth={3} />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-10 pt-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                    <Star size={14} className="fill-current" />
                  </div>
                  <p className="text-xs font-black text-primary uppercase tracking-widest mt-1">12K+ Happy Families</p>
                </div>
              </div>
            </motion.div>

            {/* Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 aspect-square rounded-[80px] overflow-hidden shadow-[0_50px_100px_rgba(27,60,26,0.15)] ring-4 ring-white/60 group">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Premium Produce"
                />
              </div>
              {/* Floating Element */}
              <div className="hidden sm:flex absolute top-10 -right-10 bg-white p-6 rounded-[32px] shadow-2xl animate-bounce z-20 gap-4 items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary">
                  <Leaf size={24} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-gray-400 tracking-tighter">100% Organic</p>
                  <p className="text-sm font-black text-primary">Guaranteed Fresh</p>
                </div>
              </div>
              <div className="hidden sm:flex absolute -bottom-10 -left-10 bg-white p-6 rounded-[32px] shadow-2xl z-20 gap-4 items-center ring-1 ring-black/5 animate-fade-up">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  <Truck size={20} />
                </div>
                <p className="text-sm font-black text-primary pr-4">NEXT DAY DELIVERY</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Category Ribbon - Names Only */}
      <section className="overflow-hidden bg-white/40 py-8 border-y border-white/60">
        <div className="container overflow-x-auto hide-scrollbar">

          <div className="bg-primary/5 backdrop-blur-md rounded-[32px] px-4 py-3 border border-white/60 shadow-sm">

            <div className="flex gap-6 md:gap-10 min-w-max items-center">
              {CATEGORIES.map(category => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="text-sm md:text-lg font-black text-primary transition-all duration-300 whitespace-nowrap hover:translate-y-[-2px]"
                >
                  {category.name}
                </Link>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Shop by Category - Square Grid */}
      <section className="container">
        <div className="flex flex-col md:flex-row md:items-end items-start justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Browse Collections</span>
            <h2 className="text-5xl md:text-7xl font-black text-primary !leading-[0.9]">Shop by <br /> Category.</h2>
          </div>
          <Link to="/search" className="btn-outline !rounded-full !py-4 !px-8 text-xs font-black uppercase tracking-widest hidden md:flex items-center gap-3">
            <span>See All Categories</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {CATEGORIES.slice(0, 8).map(category => (
            <CategorySquareCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/search" className="text-primary font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            See More <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Offers - Magazine Grid */}
      <section className="container">
        <div className="flex flex-col md:flex-row md:items-end items-start justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Seasonal curation</span>
            <h2 className="text-5xl md:text-7xl font-black text-primary !leading-[0.9]">Taste the <br /> Distinction.</h2>
          </div>
          <p className="text-left md:text-right text-primary/40 font-bold max-w-sm">
            Handpicked quality that meets the highest standards of freshness.
          </p>
        </div>

        <div className="product-grid">
          {offerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/search" className="btn-outline !rounded-full !py-6 !px-12 inline-flex items-center justify-center gap-4 group hover:gap-6 transition-all uppercase tracking-widest">
            View full catalogue <ArrowRight size={20} className="group-hover:translate-x-1 transition-all" strokeWidth={3} />
          </Link>
        </div>
      </section>

      {/* Redesigned Info Cards */}
      {/* Info Cards - Grocery Theme */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Leaf size={40} className="text-primary" />,
              title: "Farm Fresh Quality",
              desc: "Carefully selected fruits, vegetables, and essentials delivered fresh every day."
            },
            {
              icon: <Truck size={40} className="text-primary" />,
              title: "Quick Delivery",
              desc: "Fast and reliable delivery to your doorstep with proper handling."
            },
            {
              icon: <ShoppingCart size={40} className="text-primary" />,
              title: "All-in-One Grocery Store",
              desc: "Everything you need from daily essentials to specialty products in one place."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="glass-card p-10 space-y-6 hover:translate-y-[-10px] transition-all duration-500 border-white/60"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-primary">
                {item.title}
              </h3>

              <p className="text-primary/60 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
};

// Simple ArrowRight import fix
const ArrowRight = ({ size, className, strokeWidth }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Home;
