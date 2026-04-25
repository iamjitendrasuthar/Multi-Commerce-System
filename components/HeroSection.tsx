"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  ArrowRight,
  Zap,
  ShieldCheck,
  Clock,
  CreditCard,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useState, useEffect } from "react";

const HeroEcommerce = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const products = [
    {
      id: "PROD-001",
      name: "AERO AUDIO PRO",
      category: "PREMIUM AUDIO",
      price: "12,999",
      oldPrice: "15,999",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1440",
      color: "#3B82F6",
      specs: ["40H Battery", "Titanium Driver", "IPX5 Rating"],
      stock: "Only 8 units left",
    },
    {
      id: "PROD-002",
      name: "VANTAGE ELITE X",
      category: "LUXURY CHRONO",
      price: "24,500",
      oldPrice: "29,000",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1440",
      color: "#F59E0B",
      specs: ["Sapphire Glass", "Swiss Movement", "100M Water"],
      stock: "Limited Edition",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="relative min-h-[90vh] bg-[#080808] overflow-hidden">
      {/* Background Animated Gradient */}
      <div
        className="absolute top-0 right-0 w-full h-full opacity-20 transition-all duration-1000 blur-[120px]"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${products[activeIdx].color}, transparent)`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 pt-19 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 1. PRODUCT INFO (LEFT) */}
          <div className="lg:col-span-5 z-10 order-2 lg:order-1">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest border border-white/10 uppercase">
                  {products[activeIdx].category}
                </span>
                <span className="text-red-500 text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
                  <Clock size={12} /> {products[activeIdx].stock}
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter mb-6">
                {products[activeIdx].name.split(" ")[0]} <br />
                <span className="text-zinc-600 italic">
                  {products[activeIdx].name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              <div className="flex items-end gap-4 mb-10">
                <p className="text-4xl font-black text-white">
                  ₹{products[activeIdx].price}
                </p>
                <p className="text-lg text-zinc-600 line-through font-bold pb-1">
                  ₹{products[activeIdx].oldPrice}
                </p>
                <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-1 rounded mb-2">
                  SAVE 20%
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-black px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-500 group">
                  Add to Cart <ShoppingBag size={16} />
                </button>
                <button className="border border-white/10 bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all group">
                  Quick View{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
                <div className="flex flex-col gap-2">
                  <Zap size={18} className="text-zinc-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">
                    Free Shipping
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <ShieldCheck size={18} className="text-zinc-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">
                    1 Year Warranty
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <CreditCard size={18} className="text-zinc-500" />
                  <p className="text-[10px] font-black text-white uppercase tracking-widest">
                    EMI Starting ₹999
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2. PRODUCT IMAGE (CENTER/RIGHT) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 10 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-[600px] aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
              >
                <img
                  src={products[activeIdx].image}
                  alt={products[activeIdx].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Spec Tiles */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {products[activeIdx].specs.map((spec, i) => (
                <motion.div
                  key={spec + activeIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className={`absolute hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-white shadow-2xl`}
                  style={{
                    top: i === 0 ? "10%" : i === 1 ? "40%" : "75%",
                    right: i === 1 ? "-5%" : "auto",
                    left: i !== 1 ? "-5%" : "auto",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Plus size={14} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {spec}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. QUICK NAVIGATION (BOTTOM BAR) */}
        <div className="flex justify-between items-center py-12 mt-12 border-t border-white/5">
          <div className="flex gap-4">
            {products.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIdx(i)}
                className={`group flex items-center gap-4 transition-all ${activeIdx === i ? "opacity-100" : "opacity-30 hover:opacity-100"}`}
              >
                <span className="text-white text-xs font-black">0{i + 1}</span>
                <div
                  className={`h-[2px] transition-all duration-500 bg-white ${activeIdx === i ? "w-12" : "w-4"}`}
                />
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] text-white font-bold"
                >
                  U{i}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                +2k
              </div>
            </div>
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none">
              RECENTLY <br /> PURCHASED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEcommerce;
