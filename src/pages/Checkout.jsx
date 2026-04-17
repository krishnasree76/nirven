import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin, CreditCard, ShoppingBag, Plus, CheckCircle2, ArrowLeft, ChevronRight, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const addresses = [
    { id: 1, type: 'Home Sanctuary', address: '71 SmoothField Court, Hibernia Road, Hounslow, London, TW3 3RJ' },
    { id: 2, type: 'Professional Hub', address: '12-14 High Street, Hounslow, London, TW3 1EZ' },
  ];

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 8000);
  };

  if (isOrderPlaced) {
    return (
      <div className="container py-40 max-w-4xl text-center space-y-12 animate-fade-up">
        <motion.div 
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary shadow-2xl shadow-primary/10"
        >
          <CheckCircle2 size={64} strokeWidth={1.5} />
        </motion.div>
        
        <div className="space-y-6">
          <h1 className="text-5xl font-black text-primary italic leading-none">Your harvest is <br /> secured.</h1>
          <p className="text-primary/40 text-lg font-bold max-w-md mx-auto">
            Nature's finest are being prepared for their journey to you. 
            Check your email for the complete itinerary.
          </p>
        </div>
        
        <div className="pt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 opacity-30 invert pb-4">
             <div className="w-12 h-[1px] bg-black" />
             <Leaf size={24} />
             <div className="w-12 h-[1px] bg-black" />
          </div>
          <p className="text-[10px] text-primary/20 font-black uppercase tracking-[0.4em]">Returning to Boutique in 8 Seconds</p>
          <Link to="/" className="btn-primary !rounded-full py-5 px-12 text-lg">
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container pt-40 pb-40">
      <div className="flex items-center justify-between mb-20 gap-8">
         <div className="space-y-4">
            <div className="flex items-center gap-3">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Secured Flow</span>
               <div className="w-8 h-[1px] bg-secondary/30" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-none">Checkout.</h1>
         </div>
         <Link to="/cart" className="flex items-center gap-3 text-xs font-black text-primary/30 hover:text-primary transition-all uppercase tracking-widest group">
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
               <ArrowLeft size={16} />
            </div>
            Review Basket
         </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Checkout Steps */}
        <div className="lg:col-span-8 space-y-12">
          {/* Step 1: Address */}
          <section className={`glass-card p-10 border-white/60 transition-all duration-700 ${step === 1 ? 'shadow-[0_40px_100px_rgba(27,60,26,0.12)] border-primary/10' : 'opacity-40 pointer-events-none'}`}>
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl ${step >= 1 ? 'bg-primary text-white' : 'bg-primary/5 text-primary/20'}`}>1</div>
                <h2 className="text-2xl font-black text-primary">Destination</h2>
              </div>
              {step > 1 && <button onClick={() => setStep(1)} className="text-[10px] font-black text-primary/40 hover:text-primary uppercase tracking-widest underline decoration-2 underline-offset-4">Modify Destination</button>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addresses.map((addr) => (
                <div 
                  key={addr.id}
                  onClick={() => setSelectedAddress(addr.id)}
                  className={`p-10 rounded-[40px] border-2 cursor-pointer transition-all duration-500 flex flex-col justify-between h-full ${selectedAddress === addr.id ? 'border-primary bg-bg-fresh shadow-2xl shadow-primary/5' : 'border-gray-50 bg-white hover:border-primary/20 hover:translate-y-[-4px]'}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${selectedAddress === addr.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>{addr.type}</span>
                       {selectedAddress === addr.id && <CheckCircle2 size={24} strokeWidth={3} className="text-primary" />}
                    </div>
                    <p className="text-lg font-bold text-primary/70 leading-relaxed">{addr.address}</p>
                  </div>
                </div>
              ))}
              <button className="p-10 rounded-[40px] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 text-gray-300 hover:text-primary hover:border-primary transition-all group">
                <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                   <Plus size={24} />
                </div>
                <span className="text-sm font-black uppercase tracking-widest">Add New Sanctuary</span>
              </button>
            </div>
            
            <button 
              onClick={() => setStep(2)}
              className="w-full btn-primary py-5 rounded-[24px] mt-10 text-lg shadow-2xl shadow-primary/20 hover:scale-[1.01]"
            >
               Confirm Destination
            </button>
          </section>

          {/* Step 2: Payment */}
          <section className={`glass-card p-10 border-white/60 transition-all duration-700 ${step === 2 ? 'shadow-[0_40px_100px_rgba(27,60,26,0.12)] border-primary/10' : 'opacity-40 pointer-events-none'}`}>
            <div className="flex items-center gap-5 mb-12">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl ${step >= 2 ? 'bg-primary text-white' : 'bg-primary/5 text-primary/20'}`}>2</div>
              <h2 className="text-2xl font-black text-primary">Settlement</h2>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-10 rounded-[40px] border-2 border-primary bg-bg-fresh text-primary flex flex-col items-center gap-4 shadow-2xl shadow-primary/5">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                     <CreditCard size={28} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-center">Digitally Secured</span>
                </div>
                <div className="p-10 rounded-[40px] border-2 border-gray-50 flex flex-col items-center gap-4 text-gray-300 bg-gray-50/10 grayscale opacity-60">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                     <ShoppingBag size={28} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-center">Cash on Delivery</span>
                </div>
                <div className="p-10 rounded-[40px] border-2 border-gray-50 flex flex-col items-center gap-4 text-gray-300 bg-gray-50/10 grayscale opacity-60">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                     <Plus size={28} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-center">Alternative Pay</span>
                </div>
              </div>

              <div className="space-y-6">
                 <div className="grid grid-cols-1 gap-6">
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Card Identification</p>
                     <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-8 py-5 outline-none focus:bg-white transition-all font-bold text-primary" />
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Exp. Date</p>
                        <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-8 py-5 outline-none focus:bg-white transition-all font-bold text-primary" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">CVV / Security</p>
                        <input type="text" placeholder="***" className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-8 py-5 outline-none focus:bg-white transition-all font-bold text-primary" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Account Holder Name</p>
                     <input type="text" placeholder="Name as per documents" className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-8 py-5 outline-none focus:bg-white transition-all font-bold text-primary" />
                   </div>
                 </div>
              </div>

              <button 
                onClick={handlePlaceOrder}
                className="w-full btn-primary py-6 rounded-[24px] shadow-2xl shadow-primary/20 text-xl group hover:scale-[1.01]"
              >
                <span>Settle Order • £{cartTotal.toFixed(2)}</span>
                <ChevronRight size={24} className="group-hover:translate-x-2 transition-all" />
              </button>
            </div>
          </section>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <div className="glass-card bg-white/60 p-10 space-y-10 border-white/60 shadow-[0_40px_100px_rgba(27,60,26,0.08)]">
            <h3 className="text-2xl font-black text-primary italic">Selection Insight.</h3>
            
            <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-5 group items-center">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden border border-white shrink-0 shadow-sm">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-black text-primary line-clamp-1 group-hover:text-primary-light transition-colors">{item.name}</h4>
                    <p className="text-[10px] text-primary/30 font-black uppercase tracking-widest">Qty: {item.quantity} Units</p>
                    <p className="text-base font-black text-primary">£{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-10 border-t border-primary/5 space-y-6">
              <div className="flex justify-between items-center text-primary/40 text-[10px] font-black uppercase tracking-widest">
                <span>Selection Subtotal</span>
                <span className="text-primary">£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-primary/40 text-[10px] font-black uppercase tracking-widest">
                <span>Priority Logistics</span>
                <span className="text-secondary">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-primary/10">
                <p className="text-[10px] font-black text-primary/30 uppercase tracking-[0.2em]">Settle Amount</p>
                <p className="text-4xl font-black text-primary leading-none">£{cartTotal.toFixed(2)}</p>
              </div>
            </div>

            <div className="pt-10 space-y-6">
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-xs font-black text-primary/60 uppercase tracking-tighter">
                     <Truck size={14} className="text-secondary" /> Delivered fresh by tomorrow
                  </div>
                  <div className="flex items-center gap-3 text-xs font-black text-primary/60 uppercase tracking-tighter">
                     <ShieldCheck size={14} className="text-secondary" /> Direct farm-to-door logistics
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Leaf icon for the success state
const Leaf = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C10.7 14.4 12 14 15 12"></path></svg>
);

export default Checkout;
