// "use client";
// import { motion } from "framer-motion";
// import { ArrowUpRight, ShoppingBag, Plus, Sparkles } from "lucide-react";

// const categories = [
//   {
//     name: "Premium Tech",
//     priceTag: "New '26 Drops",
//     img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800",
//     items: "120+",
//     className: "lg:col-span-2 lg:row-span-2 md:col-span-2",
//     accent: "bg-blue-600/10 text-blue-600",
//     description: "Next-gen audio & computing tools.",
//   },
//   {
//     name: "Home Decor",
//     priceTag: "40% OFF",
//     img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600",
//     items: "80+",
//     className: "lg:col-span-2 lg:row-span-1 md:col-span-2",
//     accent: "bg-orange-500/10 text-orange-500",
//     description: "Minimalist modern sanctuary pieces.",
//   },
//   {
//     name: "Lifestyle",
//     priceTag: "Trending",
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600",
//     items: "200+",
//     className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
//     accent: "bg-zinc-900/10 text-zinc-900",
//     description: "Daily essential curation.",
//   },
//   {
//     name: "Accessories",
//     priceTag: "Under ₹999",
//     img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=600",
//     items: "95+",
//     className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
//     accent: "bg-emerald-600/10 text-emerald-600",
//     description: "Finishing style touches.",
//   },
// ];

// export const CategorySection = () => {
//   return (
//     <section className="py-32 bg-white overflow-hidden selection:bg-blue-100">
//       <div className="max-w-[1440px] mx-auto px-6 md:px-12">

//         {/* --- Minimalist Luxury Header --- */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               className="flex items-center gap-3"
//             >
//               <div className="h-[1px] w-12 bg-blue-600" />
//               <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-600">
//                 Curated Series
//               </span>
//             </motion.div>
//             <h2 className="text-6xl md:text-8xl font-black text-zinc-950 tracking-tighter leading-[0.85]">
//               Shop the <br />
//               <span className="text-zinc-200 italic font-light outline-text">Collections</span>
//             </h2>
//           </div>

//           <div className="flex flex-col items-start lg:items-end gap-6">
//             <p className="text-zinc-500 text-sm font-medium max-w-[320px] lg:text-right leading-relaxed">
//               Discover a meticulously curated selection of premium artifacts for the modern home.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="group flex items-center gap-4 bg-zinc-950 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-zinc-200"
//             >
//               View All Series <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
//             </motion.button>
//           </div>
//         </div>

//         {/* --- High-End Light Bento Grid --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[340px] gap-8">
//           {categories.map((cat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
//               viewport={{ once: true }}
//               className={`relative overflow-hidden group cursor-pointer rounded-[3.5rem] bg-[#fcfcfc] border border-zinc-100 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] ${cat.className}`}
//             >
//               {/* Subtle Gradient Glow (Light Mode) */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//               {/* Product Image Layer */}
//               <div className="absolute inset-0 p-12 md:p-16 flex items-center justify-center">
//                 <motion.img
//                   src={cat.img}
//                   className="w-full h-full object-contain group-hover:scale-110 group-hover:-translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
//                   alt={cat.name}
//                 />
//               </div>

//               {/* Glass Metadata (Top Left) */}
//               <div className="absolute top-8 left-8 z-20">
//                 <div className={`px-4 py-2 rounded-2xl backdrop-blur-xl border border-zinc-100 shadow-sm ${cat.accent}`}>
//                   <span className="text-[9px] font-black uppercase tracking-widest">
//                     {cat.priceTag}
//                   </span>
//                 </div>
//               </div>

//               {/* Float Info Pod (Top Right) */}
//               <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                 <div className="h-12 w-12 rounded-full bg-zinc-950 flex items-center justify-center text-white shadow-2xl shadow-zinc-300">
//                    <Plus size={20} />
//                 </div>
//               </div>

//               {/* Bottom Content Area */}
//               <div className="absolute inset-x-0 bottom-0 p-10 z-20">
//                 <div className="relative">
//                    {/* Blur Overlay on Hover */}
//                    <div className="absolute inset-0 -m-10 bg-white/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                    <div className="relative space-y-2">
//                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500">
//                         {cat.items} Products
//                      </span>
//                      <h3 className="text-3xl md:text-4xl font-black text-zinc-950 tracking-tighter leading-tight">
//                         {cat.name}
//                      </h3>
//                      <p className="text-sm text-zinc-500 font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 line-clamp-1">
//                         {cat.description}
//                      </p>
//                    </div>
//                 </div>
//               </div>

//               {/* Soft Inner Border on Hover */}
//               <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white transition-all duration-500 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .outline-text {
//           -webkit-text-stroke: 1px #e5e7eb;
//           color: transparent;
//         }
//       `}</style>
//     </section>
//   );
// };
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Sparkles, ShoppingBag } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    tag: "Next-Gen",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800",
    items: "120",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-2",
    accent: "text-blue-600",
    desc: "Audio & computing artifacts."
  },
  {
    name: "Home Decor",
    tag: "Minimalist",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800",
    items: "85",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-2",
    accent: "text-orange-500",
    desc: "Architectural sanctuary."
  },
  {
    name: "Fashion",
    tag: "Essentials",
    img: "https://images.unsplash.com/photo-1539109132382-381bb3f1cff6?q=80&w=800",
    items: "340",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    accent: "text-zinc-950",
    desc: "Luxury organic linen."
  },
  {
    name: "Wellness",
    tag: "Self-Care",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
    items: "95",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    accent: "text-emerald-600",
    desc: "Mindful living tools."
  },
];

export const CategorySection = () => {
  return (
    <section className="py-24 bg-white selection:bg-blue-50">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
                Collections 2026
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-none uppercase">
              The <span className="text-zinc-200 italic font-light outline-text">Series</span>
            </h2>
          </div>
          
          <button className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-950 hover:text-blue-600 transition-colors">
            All Series <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>

        {/* --- Optimized Bento Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[240px] gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group rounded-[2.5rem] bg-[#f9f9f9] border border-zinc-100 transition-all duration-700 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200/50 ${cat.className}`}
            >
              {/* Image Layer */}
              <div className="absolute inset-0 p-10 flex items-center justify-center">
                <motion.img
                  src={cat.img}
                  className="w-full h-full object-contain grayscale-[100%] group-hover:grayscale-0 group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  alt={cat.name}
                />
              </div>

              {/* Glass Metadata (Top Left) */}
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 bg-white/60 backdrop-blur-xl border border-white/60 rounded-full text-[8px] font-black uppercase tracking-widest text-zinc-500 shadow-sm">
                  {cat.tag}
                </span>
              </div>

              {/* Floating Count Badge (Top Right) */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="h-10 w-10 rounded-full bg-zinc-950 flex items-center justify-center text-white shadow-xl">
                   <Plus size={18} />
                </div>
              </div>

              {/* Bottom Info Pill (Interactive UK) */}
              <div className="absolute inset-x-4 bottom-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[1.8rem] p-5 shadow-sm group-hover:shadow-xl transition-all">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[8px] font-black uppercase tracking-widest ${cat.accent}`}>
                          {cat.items} SERIES
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-zinc-950 tracking-tighter leading-none">
                        {cat.name}
                      </h3>
                      <p className="text-[10px] text-zinc-400 font-medium line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {cat.desc}
                      </p>
                    </div>
                    <div className="p-2 bg-zinc-100 rounded-xl group-hover:bg-zinc-950 group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #e5e7eb;
          color: transparent;
        }
      `}</style>
    </section>
  );
};