// 'use client'
// import { motion } from "framer-motion";

// const allCategories = [
//   {
//     name: "Electronics",
//     items: "120",
//     img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
//   },
//   {
//     name: "Home Decor",
//     items: "85",
//     img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400",
//   },
//   {
//     name: "Fashion",
//     items: "340",
//     img: "https://images.unsplash.com/photo-1539109132382-381bb3f1cff6?w=400",
//   },
//   {
//     name: "Wellness",
//     items: "95",
//     img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400",
//   },
//   {
//     name: "Footwear",
//     items: "210",
//     img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
//   },
//   {
//     name: "Watches",
//     items: "56",
//     img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
//   },
//   {
//     name: "Furniture",
//     items: "45",
//     img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
//   },
//   {
//     name: "Beauty",
//     items: "150",
//     img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400",
//   },
//   {
//     name: "Kitchen",
//     items: "80",
//     img: "https://images.unsplash.com/photo-1556911220-e1502134915e?w=400",
//   },
//   {
//     name: "Sports",
//     items: "115",
//     img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
//   },
//   {
//     name: "Luggage",
//     items: "40",
//     img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400",
//   },
//   {
//     name: "Accessories",
//     items: "300",
//     img: "https://images.unsplash.com/photo-1512168317533-3d304e9f7835?w=400",
//   },
// ];

// export const CategoryGrid = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-[1440px] mx-auto px-6">
//       <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">
//         Select by <span className="text-zinc-300">Category</span>
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {allCategories.map((cat, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ y: -5 }}
//             className="relative h-[180px] rounded-[2rem] overflow-hidden group border border-zinc-100 bg-zinc-50"
//           >
//             <img
//               src={cat.img}
//               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               alt={cat.name}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
//               <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest">
//                 {cat.items} Items
//               </span>
//               <h3 className="text-lg font-bold text-white tracking-tight">
//                 {cat.name}
//               </h3>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const allCategories = [
  {
    name: "Tech",
    items: "120",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
  },
  {
    name: "Decor",
    items: "85",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
  },
  {
    name: "Fashion",
    items: "340",
    img: "https://plus.unsplash.com/premium_photo-1683817138481-dcdf64a40859?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Wellness",
    items: "95",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500",
  },
  {
    name: "Shoes",
    items: "210",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    name: "Watches",
    items: "56",
    img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
  },
  {
    name: "Living",
    items: "45",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
  },
  {
    name: "Beauty",
    items: "150",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
  },
  {
    name: "Kitchen",
    items: "80",
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbnxlbnwwfDB8MHx8fDA%3D",
  },
  {
    name: "Sports",
    items: "115",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
  },
  {
    name: "Bags",
    items: "40",
    img: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
  },
  {
    name: "Style",
    items: "300",
    img: "https://plus.unsplash.com/premium_photo-1727895543432-41cc8184552e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R5bGV8ZW58MHwwfDB8fHww",
  },
];

export const CategoryGrid = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4">
      {/* --- Compact Header --- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-10 bg-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
              Collections 2026
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-950 leading-none uppercase">
            Select by{" "}
            <span className="text-zinc-200 italic font-light outline-text">
              Category
            </span>
          </h2>
        </div>

        <button className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-950 hover:text-blue-600 transition-colors">
          All Categories{" "}
          <ArrowUpRight
            size={16}
            className="group-hover:rotate-45 transition-transform"
          />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {allCategories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -3 }}
            className="relative h-[140px] md:h-[160px] rounded-2xl overflow-hidden group cursor-pointer border border-zinc-100 bg-[#fafafa]"
          >
            {/* Image Layer */}
            <img
              src={cat.img}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              alt={cat.name}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest mb-0.5">
                {cat.items} ITEMS
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-sm md:text-lg font-black text-white uppercase tracking-tight leading-none">
                  {cat.name}
                </h3>
                <ArrowUpRight
                  size={14}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
