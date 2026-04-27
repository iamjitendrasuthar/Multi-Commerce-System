// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Sparkles, // New icon for Lookbook
//   Globe,
//   Compass,
//   Zap,
//   ShieldCheck,
//   CreditCard,
//   Plus,
// } from "lucide-react";
// import { useState, useEffect } from "react";

// const HeroBanner = () => {
//   const [activeIdx, setActiveIdx] = useState(0);

//   const slides = [
//     {
//       id: "SLIDE-01",
//       title: "FUTURE OF SOUND",
//       subtitle: "AERO SERIES 2026",
//       desc: "Experience auditory perfection with our new titanium-driver series. Redefining the boundaries of wireless acoustics.",
//       image:
//         "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1440",
//       color: "#3B82F6",
//       badges: [
//         { icon: <Zap size={14} />, text: "FREE SHIPPING" },
//         { icon: <ShieldCheck size={14} />, text: "1 YEAR WARRANTY" },
//         { icon: <Plus size={14} />, text: "LIMITED DROP" }, // 3rd Badge
//       ],
//     },
//     {
//       id: "SLIDE-02",
//       title: "TIMELESS PRECISION",
//       subtitle: "VANTAGE LEGACY",
//       desc: "Where Swiss engineering meets modern minimalism. A statement piece for those who value every micro-second.",
//       image:
//         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1440",
//       color: "#F59E0B",
//       badges: [
//         { icon: <ShieldCheck size={14} />, text: "HERITAGE" },
//         { icon: <CreditCard size={14} />, text: "EMI starting ₹999" },
//         { icon: <Sparkles size={14} />, text: "HANDCRAFTED" }, // 3rd Badge
//       ],
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 8000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <section className="relative min-h-screen py-10 bg-[#050505] overflow-hidden flex flex-col justify-center selection:bg-blue-900/30">
//       <div
//         className="absolute top-0 right-0 w-full h-full opacity-30 transition-all duration-1000 blur-[150px]"
//         style={{
//           background: `radial-gradient(circle at 70% 30%, ${slides[activeIdx].color}, transparent)`,
//         }}
//       />

//       <div className="container mx-auto px-6 lg:px-12 z-10 flex-grow flex flex-col justify-center">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* --- CONTENT (LEFT) --- */}
//           <div className="lg:col-span-6 space-y-8">
//             <motion.div
//               key={activeIdx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="space-y-6"
//             >
//               <div className="flex items-center gap-4">
//                 <span className="w-12 h-[1px] bg-blue-600" />
//                 <span className="text-blue-500 text-xs font-black tracking-[0.4em] uppercase">
//                   {slides[activeIdx].subtitle}
//                 </span>
//               </div>

//               <h1 className="text-6xl lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter">
//                 {slides[activeIdx].title.split(" ")[0]} <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600 italic font-light">
//                   {slides[activeIdx].title.split(" ").slice(1).join(" ")}
//                 </span>
//               </h1>

//               <p className="text-zinc-400 text-lg max-w-md leading-relaxed font-medium">
//                 {slides[activeIdx].desc}
//               </p>

//   <div className="flex flex-wrap gap-5 pt-4">
//     <button className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-xl shadow-black/20">
//       <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
//         Explore Collection <ArrowRight size={18} />
//       </span>
//       <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//     </button>

//     {/* Updated Action: View Lookbook */}
//     <button className="flex items-center gap-4 px-8 py-5 text-white font-black text-xs uppercase tracking-widest hover:text-blue-500 transition-all group">
//       <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
//         <Sparkles size={16} />
//       </div>
//       View Lookbook
//     </button>
//   </div>
//             </motion.div>
//           </div>

//           {/* --- VISUAL (RIGHT) --- */}
//           <div className="lg:col-span-6 relative flex justify-center items-center px-4">
//             <div className="relative w-full max-w-[550px]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIdx}
//                   initial={{ opacity: 0, scale: 0.9, y: 30 }}
//                   animate={{ opacity: 1, scale: 1, y: 0 }}
//                   exit={{ opacity: 0, scale: 1.1, y: -30 }}
//                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//                   // Fixed width/height for Portrait instead of Aspect Ratio
//                   className="relative z-10 w-full h-[450px] md:h-[600px] rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)]"
//                 >
//                   <img
//                     src={slides[activeIdx].image}
//                     alt="Banner"
//                     className="w-full h-full object-cover grayscale-[0.1]"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                 </motion.div>
//               </AnimatePresence>

//               {/* --- 3 FLOATING GLASS BADGES --- */}
//               <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
//                 {slides[activeIdx].badges.map((badge, i) => (
//                   <motion.div
//                     key={badge.text + activeIdx}
//                     initial={{ opacity: 0, scale: 0.5, x: i === 1 ? 40 : -40 }}
//                     animate={{ opacity: 1, scale: 1, x: 0 }}
//                     transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
//                     className="absolute flex items-center gap-4 bg-white/5 backdrop-blur-3xl border border-white/10 p-4 rounded-2xl text-white shadow-2xl shadow-black/50"
//                     style={{
//                       // 3-Badge Triangle Layout
//                       top: i === 0 ? "10%" : i === 1 ? "45%" : "auto",
//                       bottom: i === 2 ? "15%" : "auto",
//                       left: i === 0 ? "-15%" : i === 2 ? "-8%" : "auto",
//                       right: i === 1 ? "-15%" : "auto",
//                     }}
//                   >
//                     <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
//                       {badge.icon}
//                     </div>
//                     <div className="flex flex-col pr-2">
//                       <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">
//                         {badge.text}
//                       </span>
//                       <span className="text-[8px] text-zinc-500 font-bold mt-1 uppercase tracking-widest">
//                         Verified Drop
//                       </span>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- FOOTER NAV --- */}
//         <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-center sm:text-left">
//           <div className="flex gap-10">
//             {slides.map((s, i) => (
//               <button
//                 key={s.id}
//                 onClick={() => setActiveIdx(i)}
//                 className="group"
//               >
//                 <p
//                   className={`text-[10px] font-black tracking-[0.3em] mb-2 transition-colors ${activeIdx === i ? "text-blue-500" : "text-zinc-600"}`}
//                 >
//                   0{i + 1}
//                 </p>
//                 <div
//                   className={`h-[2px] bg-white transition-all duration-700 ${activeIdx === i ? "w-16" : "w-6 opacity-20 group-hover:opacity-100"}`}
//                 />
//               </button>
//             ))}
//           </div>

//           <div className="flex gap-8">
//             <div className="flex items-center gap-4">
//               <Globe size={18} className="text-zinc-600" />
//               <p className="text-[10px] font-black text-white uppercase tracking-widest">
//                 Global Drop <br />{" "}
//                 <span className="text-zinc-500">24+ Countries</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <Compass size={18} className="text-zinc-600" />
//               <p className="text-[10px] font-black text-white uppercase tracking-widest">
//                 Est. 2018 <br />{" "}
//                 <span className="text-zinc-500">Crafting Legacy</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Compass,
  Zap,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { useState, useEffect } from "react";

const HeroBanner = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const slides = [
    {
      id: "SLIDE-01",
      title: "FUTURE OF SOUND",
      subtitle: "AERO SERIES 2026",
      desc: "Experience auditory perfection with titanium-driver series. Redefining wireless acoustics.",
      image:
        "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1440",
      color: "#3B82F6",
      badges: [
        { icon: <Zap size={14} />, text: "Free Shipping" },
        { icon: <ShieldCheck size={14} />, text: "1Yr Warranty" },
      ],
    },
    {
      id: "SLIDE-02",
      title: "TIMELESS PRECISION",
      subtitle: "VANTAGE LEGACY",
      desc: "Swiss engineering meets modern minimalism. Crafted for the absolute elite.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1440",
      color: "#F59E0B",
      badges: [
        { icon: <ShieldCheck size={14} />, text: "Heritage" },
        { icon: <CreditCard size={14} />, text: "Secure Pay" },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[100dvh] bg-[#050505] overflow-hidden">
      {/* 1. MOBILE BACKGROUND IMAGE (Full Screen on Mobile, Split on Desktop) */}
      <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <img
              src={slides[activeIdx].image}
              alt="Banner"
              className="w-full h-full object-cover grayscale-[0.1]"
            />
            {/* Cinematic Overlay - Mobile par bottom se black gradient strong hai */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent lg:bg-gradient-to-r lg:from-[#050505] lg:via-[#050505]/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. DYNAMIC AURA BLUR */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 blur-[120px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle, ${slides[activeIdx].color}, transparent 70%)`,
        }}
      />

      {/* 3. MAIN CONTENT LAYER */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col">
        <div className="container mx-auto px-6 lg:px-12 flex-grow flex flex-col justify-end lg:justify-center pb-12 lg:pb-0">
          <div className="max-w-xl space-y-6 lg:space-y-10">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-blue-600 hidden lg:block" />
                <span className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase">
                  {slides[activeIdx].subtitle}
                </span>
              </div>

              {/* Title - Optimized for mobile tap impact */}
              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.9] tracking-tighter">
                {slides[activeIdx].title.split(" ")[0]} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500 italic font-light drop-shadow-2xl">
                  {slides[activeIdx].title.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              {/* Description - Max 2 lines on mobile */}
              <p className="text-zinc-300/80 text-sm md:text-lg max-w-sm lg:max-w-md leading-relaxed font-medium line-clamp-2 lg:line-clamp-none">
                {slides[activeIdx].desc}
              </p>

              {/* Floating Badges (Mobile-Friendly Icons) */}
              <div className="flex gap-4 lg:hidden">
                {slides[activeIdx].badges.map((badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full"
                  >
                    <div className="text-blue-500">{badge.icon}</div>
                    <span className="text-[8px] font-black text-white uppercase tracking-wider">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Group */}
              <div className="pt-4">
                {/* --- MOBILE VIEW BUTTONS (Visible only on small screens) --- */}
                <div className="flex flex-col gap-4 lg:hidden">
                  <button className="group relative w-full px-10 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-2xl">
                    <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors duration-500">
                      Explore Drop <ArrowRight size={16} />
                    </span>
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>

                  <button className="flex items-center justify-center gap-4 py-4 text-white font-black text-[11px] uppercase tracking-widest hover:text-blue-500 transition-all group border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                    <Sparkles size={16} />
                    Lookbook
                  </button>
                </div>

                {/* --- DESKTOP VIEW BUTTONS (Visible only on large screens) --- */}
                <div className="hidden lg:flex flex-wrap gap-5">
                  <button className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-xl shadow-black/20">
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                      Explore Collection <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>

                  <button className="flex items-center gap-4 px-8 py-5 text-white font-black text-xs uppercase tracking-widest hover:text-blue-500 transition-all group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                      <Sparkles size={16} />
                    </div>
                    View Lookbook
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. MODERN MOBILE PAGINATION */}
          <div className="mt-12 lg:mt-24 pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-6">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="relative flex flex-col group py-2"
                >
                  <span
                    className={`text-[10px] font-black mb-2 transition-all ${activeIdx === i ? "text-white translate-y-0" : "text-zinc-600 translate-y-1 opacity-50"}`}
                  >
                    0{i + 1}
                  </span>
                  <div
                    className={`h-[3px] rounded-full transition-all duration-700 ${activeIdx === i ? "w-10 bg-blue-600" : "w-4 bg-zinc-800"}`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 opacity-40">
              <Globe size={14} className="text-white" />
              <Compass size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
