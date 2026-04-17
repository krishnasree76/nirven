import React from 'react';
import { User, MapPin, Package, Settings, LogOut, ChevronRight, Star, Heart, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+44 77777 88355',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  };

  const orders = [
    { id: '#ORD-9821', date: 'Oct 15, 2026', total: 42.50, status: 'Delivered' },
    { id: '#ORD-7742', date: 'Sep 28, 2026', total: 18.20, status: 'Delivered' },
  ];

  return (
    <div className="container pt-40 pb-40">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Sidebar - Member Profile */}
        <aside className="w-full lg:w-80 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-10 text-center space-y-6 border-white/60 shadow-[0_40px_100px_rgba(27,60,26,0.08)]"
          >
            <div className="relative w-28 h-28 rounded-full bg-white mx-auto p-1 border-2 border-primary/10 group overflow-hidden">
               <div className="w-full h-full rounded-full overflow-hidden">
                  <img src={user.image} alt="User" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full border-4 border-white flex items-center justify-center text-white">
                  <ShieldCheck size={14} strokeWidth={3} />
               </div>
            </div>
            
            <div className="space-y-1">
              <h3 className="font-black text-2xl text-primary">{user.name}</h3>
              <p className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em]">Premium Beneficiary</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="bg-white/40 ring-1 ring-white/60 rounded-[40px] p-4 flex flex-col gap-2">
            {[
              { icon: <User size={20} />, label: "Personal Portfolio", active: true },
              { icon: <Package size={20} />, label: "Harvest History" },
              { icon: <MapPin size={20} />, label: "Delivery Sanctuaries" },
              { icon: <Settings size={20} />, label: "Configuration" },
            ].map((item, i) => (
              <button 
                key={i} 
                className={`w-full flex items-center justify-between px-6 py-5 rounded-[24px] transition-all duration-500 group ${item.active ? 'bg-primary text-white shadow-2xl shadow-primary/20 scale-[1.02]' : 'text-primary/40 hover:bg-bg-fresh hover:text-primary'}`}
              >
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={16} className={`transition-all ${item.active ? 'opacity-100 translate-x-1' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
              </button>
            ))}
            
            <button className="w-full flex items-center gap-4 px-6 py-6 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-[24px] transition-all mt-6 border-t border-gray-50">
              <LogOut size={20} strokeWidth={2.5} />
              <span className="font-black text-xs uppercase tracking-widest">Terminate Session</span>
            </button>
          </div>
        </aside>

        {/* content Area */}
        <div className="flex-1 space-y-20">
          {/* Detailed Info */}
          <section className="glass-card p-12 border-white/60 space-y-12 shadow-[0_40px_100px_rgba(27,60,26,0.05)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">The Profile</span>
                    <div className="w-8 h-[1px] bg-secondary/30" />
                 </div>
                 <h2 className="text-4xl font-black text-primary italic leading-none">Your Essentials.</h2>
              </div>
              <button className="text-[10px] font-black text-primary underline decoration-2 underline-offset-8 uppercase tracking-widest">Update Information</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {[
                 { label: "Boutique Member Name", val: user.name },
                 { label: "Digital Identity", val: user.email },
                 { label: "Mobile Connectivity", val: user.phone },
                 { label: "Member Status Since", val: "January 2026" },
               ].map((field, i) => (
                 <div key={i} className="space-y-2 group">
                   <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4 group-hover:text-primary transition-colors">/ {field.label}</p>
                   <p className="text-xl font-black text-primary px-4">{field.val}</p>
                 </div>
               ))}
            </div>
          </section>

          {/* Harvest Timeline */}
          <section className="space-y-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-4">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Timeline</span>
                    <div className="w-8 h-[1px] bg-secondary/30" />
                 </div>
                 <h2 className="text-4xl font-black text-primary italic leading-none">Recent Deliveries.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {orders.map((order, i) => (
                <motion.div 
                  key={order.id} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[40px] p-8 md:p-10 border border-gray-50 flex items-center justify-between shadow-sm hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-700 group"
                >
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-[24px] bg-bg-fresh flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-white">
                      <Package size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-primary">{order.id}</h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{order.date}</span>
                        <div className="w-1 h-1 bg-gray-200 rounded-full" />
                        <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{order.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="text-2xl font-black text-primary">£{order.total.toFixed(2)}</p>
                    <button className="text-[9px] font-black text-gray-300 hover:text-primary uppercase tracking-widest border border-gray-100 px-3 py-1.5 rounded-full transition-all">Track Harvest</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Engagement: Ratings */}
          <section className="glass-card bg-primary p-12 space-y-10 border-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 text-white animate-pulse">
               <Star size={100} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-black text-white italic">Opinion Matters.</h2>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Share the joy of fresh produce</p>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-3xl p-8 rounded-[40px] border border-white/10 group/item hover:border-white/20 transition-all duration-700">
              <div className="w-24 h-24 rounded-[32px] overflow-hidden border-2 border-white/20 shrink-0">
                <img src="https://images.unsplash.com/photo-1546473427-e1ad6d662243?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h4 className="text-xl font-black text-white">Fresh Organic Tomatoes</h4>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white/20">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={24} className="hover:text-yellow-400 cursor-pointer transition-colors hover:scale-125" />
                  ))}
                </div>
              </div>
              <button className="btn-primary !bg-secondary !text-primary !rounded-full !py-4 !px-8 text-xs !shadow-none hover:scale-105 transition-all">Express Now</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
