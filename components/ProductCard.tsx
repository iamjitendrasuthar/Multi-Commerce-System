// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   Star,
//   Heart,
//   Eye,
//   ChevronLeft,
//   ChevronRight,
//   ShoppingBag,
//   ArrowRight,
//   TrendingUp,
// } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Aero Audio Pro Max",
//     price: 12499,
//     originalPrice: 15999,
//     rating: 4.8,
//     reviews: 1240,
//     img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
//     badge: "Bestseller",
//     category: "Acoustics",
//   },
//   {
//     id: 2,
//     name: "Smart Ergo Office Chair",
//     price: 8999,
//     originalPrice: 12000,
//     rating: 4.6,
//     reviews: 850,
//     img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800",
//     badge: "20% OFF",
//     category: "Workplace",
//   },
//   {
//     id: 3,
//     name: "Nova Ambient Lamp",
//     price: 2499,
//     originalPrice: 3500,
//     rating: 4.9,
//     reviews: 2100,
//     img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
//     badge: "New Arrival",
//     category: "Living",
//   },
//   {
//     id: 4,
//     name: "Classic Chrono Leather",
//     price: 5999,
//     originalPrice: 7999,
//     rating: 4.7,
//     reviews: 430,
//     img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
//     badge: "Rare Find",
//     category: "Essentials",
//   },
// ];

// export const TrendingSection = () => {
//   const scrollRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const updateScrollProgress = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//       setScrollProgress(progress);
//     }
//   };

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const offset = direction === "left" ? -360 : 340;
//       scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="py-24 bg-white overflow-hidden selection:bg-blue-100">
//       <div className="max-w-[1400px] mx-auto px-6 md:px-10">
//         {/* --- Minimalist Header --- */}
//         <div className="flex items-end justify-between mb-12">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-[1px] bg-blue-600" />
//               <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-600">
//                 Top Velocity
//               </span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-zinc-950 tracking-tighter leading-none">
//               Trending{" "}
//               <span className="text-zinc-200 italic font-light outline-text">
//                 Now.
//               </span>
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <NavButton
//               onClick={() => scroll("left")}
//               icon={<ChevronLeft size={20} />}
//             />
//             <NavButton
//               onClick={() => scroll("right")}
//               icon={<ChevronRight size={20} />}
//             />
//           </div>
//         </div>

//         {/* --- Product Grid --- */}
//         <div
//           ref={scrollRef}
//           onScroll={updateScrollProgress}
//           className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-12"
//         >
//           {products.map((product, i) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: i * 0.1,
//                 duration: 0.8,
//                 ease: [0.19, 1, 0.22, 1],
//               }}
//               viewport={{ once: true }}
//               className="min-w-[300px] md:min-w-[340px] snap-start group cursor-pointer"
//             >
//               {/* Image Architecture */}
//               <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#fcfcfc] border border-zinc-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
//                 />

//                 {/* Top Overlay: Badge & Actions */}
//                 <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
//                   <span className="px-4 py-2 bg-white/40 backdrop-blur-xl border border-white/20 text-[9px] font-black tracking-widest text-zinc-900 uppercase rounded-2xl shadow-sm">
//                     {product.badge}
//                   </span>

//                   <div className="flex flex-col gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
//                     <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl hover:bg-rose-500 hover:text-white transition-all text-zinc-900 shadow-xl">
//                       <Heart size={18} />
//                     </button>
//                     <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl hover:bg-blue-600 hover:text-white transition-all text-zinc-900 shadow-xl">
//                       <Eye size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Bottom Overlay: Fast Action */}
//                 <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
//                   <button className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 group/btn relative overflow-hidden transition-all active:scale-95 shadow-2xl">
//                     <span className="relative z-10 flex items-center gap-2">
//                       Quick Buy <ShoppingBag size={14} />
//                     </span>
//                     <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
//                   </button>
//                 </div>

//                 {/* Subtle Hover Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//               </div>

//               {/* Product Info */}
//               <div className="mt-8 px-2 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
//                     {product.category}
//                   </span>
//                   <div className="flex items-center gap-1.5">
//                     <Star
//                       size={12}
//                       className="fill-yellow-400 text-yellow-400"
//                     />
//                     <span className="text-[11px] font-black text-zinc-900">
//                       {product.rating}
//                     </span>
//                   </div>
//                 </div>

//                 <h3 className="text-2xl font-black text-zinc-950 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
//                   {product.name}
//                 </h3>

//                 <div className="flex items-end gap-3">
//                   <span className="text-3xl font-black text-zinc-950 italic tracking-tighter">
//                     ₹{product.price.toLocaleString()}
//                   </span>
//                   <div className="flex flex-col pb-1">
//                     <span className="text-xs text-zinc-400 line-through font-bold">
//                       ₹{product.originalPrice.toLocaleString()}
//                     </span>
//                     <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter">
//                       Save ₹
//                       {(product.originalPrice - product.price).toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}

//           {/* Luxury Discover Card */}
//           <div className="min-w-[280px] snap-start flex flex-col items-center justify-center border-2 border-dashed border-zinc-100 rounded-[2.5rem] group hover:bg-zinc-50 transition-all duration-700">
//             <div className="w-16 h-14 rounded-3xl bg-white shadow-xl flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
//               <ArrowRight
//                 size={28}
//                 className="group-hover:translate-x-1 transition-transform"
//               />
//             </div>
//             <p className="mt-6 text-sm font-black text-zinc-950 uppercase tracking-widest">
//               See Full Drop
//             </p>
//             <p className="text-[10px] text-zinc-400 font-bold uppercase mt-2">
//               150+ Products
//             </p>
//           </div>
//         </div>

//         {/* --- Ultra Minimal Progress --- */}
//         <div className="mt-6 flex justify-center items-center gap-8">
//           <div className="h-[1px] w-full max-w-[200px] bg-zinc-100 relative">
//             <motion.div
//               className="absolute top-0 left-0 h-full bg-blue-600"
//               animate={{ width: `${scrollProgress}%` }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .outline-text {
//           -webkit-text-stroke: 1px #e5e7eb;
//           color: transparent;
//         }
//       `}</style>
//     </section>
//   );
// };

// // NavButton Component
// const NavButton = ({ onClick, icon }) => (
//   <button
//     onClick={onClick}
//     className="p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm text-zinc-400 hover:text-zinc-950 hover:shadow-xl transition-all active:scale-90"
//   >
//     {icon}
//   </button>
// );
"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Zap,
  Award,
} from "lucide-react";

// --- Multi-Section Data Object ---
const DATA_STORE = {
  trending: {
    title: "Trending",
    subtitle: "Top Velocity",
    icon: <TrendingUp size={14} className="text-blue-600" />,
    items: [
      {
        id: 1,
        name: "Aero Audio Pro Max",
        price: 12499,
        originalPrice: 15999,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
        badge: "Bestseller",
        category: "Acoustics",
      },
      {
        id: 2,
        name: "Smart Ergo Office Chair",
        price: 8999,
        originalPrice: 12000,
        rating: 4.6,
        img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800",
        badge: "20% OFF",
        category: "Workplace",
      },
      {
        id: 3,
        name: "Nova Ambient Lamp",
        price: 2499,
        originalPrice: 3500,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800",
        badge: "New Arrival",
        category: "Living",
      },
      {
        id: 4,
        name: "Classic Chrono Leather",
        price: 5999,
        originalPrice: 7999,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800",
        badge: "Rare Find",
        category: "Essentials",
      },
    ],
  },
  latest: {
    title: "Arrivals",
    subtitle: "Just Landed",
    icon: <Zap size={14} className="text-emerald-500" />,
    items: [
      {
        id: 5,
        name: "Nordic Coffee Table",
        price: 15499,
        originalPrice: 18000,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800",
        badge: "Modern",
        category: "Furniture",
      },
      {
        id: 6,
        name: "Aura Diffuser",
        price: 2199,
        originalPrice: 2999,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1635750602248-b1d99ceef563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEF1cmElMjBEaWZmdXNlcnxlbnwwfDB8MHx8fDA%3D",
        badge: "Wellness",
        category: "Living",
      },
      {
        id: 7,
        name: "Kinetics Mouse G",
        price: 5499,
        originalPrice: 7000,
        rating: 5.0,
        img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800",
        badge: "Pro Grade",
        category: "Tech",
      },
      {
        id: 8,
        name: "Leather Tote Bag",
        price: 4299,
        originalPrice: 5500,
        rating: 4.5,
        img: "https://images.unsplash.com/photo-1760624295064-2de890f64524?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVhdGhlciUyMFRvdGUlMjBCYWd8ZW58MHwwfDB8fHww",
        badge: "Handmade",
        category: "Fashion",
      },
    ],
  },
  toprated: {
    title: "Favorites",
    subtitle: "Community Loved",
    icon: <Award size={14} className="text-orange-500" />,
    items: [
      {
        id: 9,
        name: "Studio Monitor Z",
        price: 28999,
        originalPrice: 32000,
        rating: 5.0,
        img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800",
        badge: "5.0 Rating",
        category: "Audio",
      },
      {
        id: 10,
        name: "Ergo Desk Pro",
        price: 34999,
        originalPrice: 40000,
        rating: 4.9,
        img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
        badge: "Premium",
        category: "Workplace",
      },
      {
        id: 11,
        name: "Mechanical Key One",
        price: 12999,
        originalPrice: 15000,
        rating: 4.8,
        img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
        badge: "Custom",
        category: "Tech",
      },
      {
        id: 12,
        name: "Oversized Linen Shirt",
        price: 2899,
        originalPrice: 3999,
        rating: 4.7,
        img: "https://images.unsplash.com/photo-1566676144477-2f0fa75e3ab5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE92ZXJzaXplZCUyMExpbmVuJTIwU2hpcnQlMjBtYW58ZW58MHwwfDB8fHww",
        badge: "Eco-Friendly",
        category: "Fashion",
      },
    ],
  },
};

export const TrendingSection = ({ type = "trending" }) => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Jo 'type' pass karoge uska data uthayega
  // @ts-ignore
  const config = DATA_STORE[type] || DATA_STORE.trending;

  const updateScrollProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scroll = (direction: any) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -360 : 340;
      // @ts-ignore
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 bg-white overflow-hidden selection:bg-blue-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* --- Dynamic Header --- */}
        <div className="flex items-end justify-between mb-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-zinc-200" />
              <div className="flex items-center gap-2">
                {config.icon}
                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-400">
                  {config.subtitle}
                </span>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-zinc-950 tracking-tighter leading-none">
              {config.title}{" "}
              <span className="text-zinc-200 italic font-light outline-text">
                Now.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <NavButton
              onClick={() => scroll("left")}
              icon={<ChevronLeft size={20} />}
            />
            <NavButton
              onClick={() => scroll("right")}
              icon={<ChevronRight size={20} />}
            />
          </div>
        </div>

        {/* --- Product Slider --- */}
        <div
          ref={scrollRef}
          onScroll={updateScrollProgress}
          className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-12"
        >
          {config.items.map((product: any, i: any) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.19, 1, 0.22, 1],
              }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[340px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-[#fcfcfc] border border-zinc-100 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                />

                {/* Badge & Actions */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                  <span className="px-4 py-2 bg-white/40 backdrop-blur-xl border border-white/20 text-[9px] font-black tracking-widest text-zinc-900 uppercase rounded-2xl shadow-sm">
                    {product.badge}
                  </span>
                  <div className="flex flex-col gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl hover:bg-rose-500 hover:text-white transition-all text-zinc-900 shadow-xl">
                      <Heart size={18} />
                    </button>
                    <button className="p-3 bg-white/80 backdrop-blur-md rounded-xl hover:bg-blue-600 hover:text-white transition-all text-zinc-900 shadow-xl">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>

                {/* Quick Buy CTA */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                  <button className="w-full py-4 bg-zinc-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 group/btn relative overflow-hidden active:scale-95 shadow-2xl">
                    <span className="relative z-10 flex items-center gap-2">
                      Quick Buy <ShoppingBag size={14} />
                    </span>
                    <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Info */}
              <div className="mt-8 px-2 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={12}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-[11px] font-black text-zinc-900">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-zinc-950 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
                  {product.name}
                </h3>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-black text-zinc-950 italic tracking-tighter">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <div className="flex flex-col pb-1">
                    <span className="text-xs text-zinc-400 line-through font-bold">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-tighter">
                      Save ₹
                      {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Luxury Discover Card */}
          <div className="min-w-[280px] snap-start flex flex-col items-center justify-center border-2 border-dashed border-zinc-100 rounded-[2.5rem] group hover:bg-zinc-50 transition-all duration-700">
            <div className="w-16 h-14 rounded-3xl bg-white shadow-xl flex items-center justify-center group-hover:bg-zinc-950 group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
              <ArrowRight
                size={28}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
            <p className="mt-6 text-sm font-black text-zinc-950 uppercase tracking-widest">
              See Full Drop
            </p>
          </div>
        </div>

        {/* --- Progress Bar --- */}
        <div className="mt-6 flex justify-center items-center">
          <div className="h-[1px] w-full max-w-[200px] bg-zinc-100 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-600"
              animate={{ width: `${scrollProgress}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .outline-text {
          -webkit-text-stroke: 1px #e5e7eb;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

const NavButton = ({ onClick, icon }) => (
  <button
    onClick={onClick}
    className="p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm text-zinc-400 hover:text-zinc-950 hover:shadow-xl transition-all active:scale-90"
  >
    {icon}
  </button>
);
