import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, ChevronLeft, Leaf, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[100vh] flex items-center justify-center container pt-32 pb-40">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[40px] md:rounded-[60px] shadow-[0_50px_100px_rgba(27,60,26,0.12)] overflow-hidden border border-gray-50 group">

        {/* Left Side - Visual Storytelling */}
        <div className="hidden lg:block relative overflow-hidden bg-primary p-20 text-white flex flex-col justify-center gap-10">
          <div className="absolute inset-0 opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover"
              alt="Harvest"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-transparent" />

          <div className="relative z-10 space-y-8 animate-fade-up">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20">
              <Leaf size={32} className="text-secondary" strokeWidth={2.5} />
            </div>

            <h2 className="text-5xl font-black leading-tight italic">
              Cultivating a <br /> Purer Life.
            </h2>

            <p className="text-lg font-medium text-white/60 leading-relaxed max-w-md">
              Join the most exclusive organic circle in London. Access nature's premium
              harvests and authentic flavors before anyone else.
            </p>

            <div className="space-y-6 pt-6">
              {[
                "Direct From Farmer Harvest",
                "Next-Day Temperature-Controlled Logistics",
                "256-bit Secure Transaction Pipeline"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-500">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-white/40 group-hover/item:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto relative z-10">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-white/20 overflow-hidden backdrop-blur-sm">
                  <img src={`https://i.pravatar.cc/150?u=auth${i}`} alt="" />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">12,400+ Members Strong</p>
          </div>
        </div>

        {/* Right Side - Premium Form */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 hover:text-primary mb-12 transition-all">
            <ChevronLeft size={14} strokeWidth={3} /> Back to Home
          </Link>

          <div className="mb-16 space-y-4">
            <h2 className="text-5xl font-black text-primary leading-none tracking-tighter">
              {isLogin ? 'Welcome Back.' : 'Join the Circle.'}
            </h2>
            <p className="text-primary/40 text-sm font-bold tracking-widest uppercase">
              {isLogin ? 'Resume your organic journey' : 'Experience nature as intended'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Legal Name</p>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-14 py-5 outline-none focus:bg-white transition-all font-bold text-primary group-hover:bg-gray-100/50"
                    />
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-hover:text-primary/40 transition-colors" size={20} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Digital Identity</p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="jane.doe@example.com"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-14 py-5 outline-none focus:bg-white transition-all font-bold text-primary group-hover:bg-gray-100/50"
                />
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-hover:text-primary/40 transition-colors" size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest ml-4">Secured Pass</p>
              <div className="relative group">
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/10 rounded-[20px] px-14 py-5 outline-none focus:bg-white transition-all font-bold text-primary group-hover:bg-gray-100/50"
                />
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-primary/20 group-hover:text-primary/40 transition-colors" size={20} />
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button className="text-[10px] font-black text-primary/40 hover:text-primary uppercase tracking-widest transition-all">Forgot your pass?</button>
              </div>
            )}

            <button className="w-full btn-primary py-6 rounded-[24px] flex items-center justify-center gap-3 text-xl shadow-2xl shadow-primary/20 group mt-10 hover:scale-[1.01]">
              <span>{isLogin ? 'Establish Session' : 'Create Credentials'}</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-all" strokeWidth={3} />
            </button>
          </form>

          {/* Social Proof Placeholder */}
          <div className="mt-16 pt-16 border-t border-gray-50 text-center">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-10">Or connect via</p>
            <div className="flex justify-center gap-8">
              {['google', 'apple'].map(social => (
                <button key={social} className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border-2 border-transparent hover:border-primary/20 transition-all hover:translate-y-[-4px] group/social shadow-sm">
                  <div className="w-6 h-6 bg-gray-300 rounded-sm group-hover/social:bg-primary transition-colors" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-primary/40 text-[10px] font-black uppercase tracking-widest">
              {isLogin ? "New to the hub?" : "Already part of the hub?"}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary underline decoration-2 underline-offset-8 ml-2 hover:tracking-widest transition-all"
              >
                {isLogin ? 'JOIN NOW' : 'SIGN IN'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
