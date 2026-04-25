"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Search,
  Menu,
  Sparkles,
  X,
  ChevronDown,
  Heart,
  UserCircle2,
  Bell,
  ArrowRight,
  ArrowUpRight,
  User,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Expandable Search State
  const [searchExpanded, setSearchExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    {
      name: "Home",
      featured: "Smart Kitchen",
      items: ["Furniture", "Decor", "Kitchen", "Bedding", "Lighting", "Garden"],
    },
    {
      name: "Electronics",
      featured: "iPhone 15 Pro",
      items: [
        "Smartphones",
        "Laptops",
        "Audio",
        "Cameras",
        "Gaming",
        "Wearables",
      ],
    },
    {
      name: "Fashion",
      featured: "Summer '26 Collection",
      items: [
        "Men's Wear",
        "Women's Wear",
        "Kids",
        "Accessories",
        "Footwear",
        "Watches",
      ],
    },
    {
      name: "Wellness",
      featured: "TheraFace Pro Max",
      items: [
        "Skincare",
        "Fragrances",
        "Haircare",
        "Supplements",
        "Spa Devices",
        "Grooming",
      ],
    },
    {
      name: "Active",
      featured: "Carbon E-Bike '26",
      items: [
        "Cycling",
        "Yoga & Pilates",
        "Outdoor Gear",
        "Fitness Tech",
        "Travel Bags",
        "Recovery",
      ],
    },
    {
      name: "Art & Decor",
      featured: "Minimalist Sculptures",
      items: [
        "Original Paintings",
        "Prints",
        "Ceramics",
        "Photography",
        "Coffee Table Books",
        "Vases",
      ],
    },
  ];

  const menuItems = [
    { name: "New Arrivals", hot: true },
    { name: "Trending Now", count: "24+" },
    {
      name: "Electronics",
      categories: ["Audio", "Phones", "Gaming", "Laptops"],
    },
    { name: "Lifestyle", categories: ["Home", "Fitness", "Travel", "Decor"] },
  ];

  return (
    <>
      {/* 1. Global Announcement */}
      <div className="bg-black text-white py-2.5 px-6 overflow-hidden relative border-b border-zinc-800">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] flex gap-20"
        >
          <span>✦ Use Code: VANTAGE26 for 20% Off</span>
          <span>✦ Free Global Shipping on Orders Above $200</span>
          <span>✦ New Drop: Aero Audio Pro is here</span>
          <span>✦ Join Vantage+ for exclusive early access</span>
        </motion.div>
      </div>

      <nav
        className={`sticky top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isScrolled ? "bg-white/90 backdrop-blur-3xl shadow-sm" : "bg-white"
        }`}
      >
        {/* --- TOP LINE: Logo & Utility Icons (White Background) --- */}
        <div
          className={`transition-all duration-500 ${isScrolled ? "py-3" : "py-6"}`}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
            {/* Left: Hamburger (Mobile) & Logo - Hides on Mobile when Search Opens */}
            <div
              className={`flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                searchExpanded
                  ? "absolute -translate-x-8 opacity-0 pointer-events-none sm:relative sm:translate-x-0 sm:opacity-100 sm:pointer-events-auto"
                  : "relative translate-x-0 opacity-100"
              }`}
            >
              <button
                className="lg:hidden p-2.5 hover:bg-zinc-100 rounded-full text-black transition-colors"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>

              <Link href="/" className="relative group">
                <span className="text-3xl font-[1000] tracking-[-0.08em] text-black italic">
                  VANTAGE<span className="text-blue-600 not-italic">.</span>
                </span>
              </Link>
            </div>

            {/* Right Hub: Search, Profile, Cart */}
            <div
              className={`flex items-center gap-2 md:gap-4 justify-end transition-all duration-500 ${
                searchExpanded ? "w-full sm:w-auto" : "w-auto"
              }`}
            >
              {/* --- RESPONSIVE EXPANDABLE SEARCH --- */}
              <div
                className={`relative flex items-center h-11 rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                  searchExpanded
                    ? "bg-zinc-100 w-[calc(100vw-110px)] sm:w-[260px]"
                    : "bg-transparent hover:bg-zinc-100 w-[44px]"
                }`}
              >
                <button
                  onClick={() => setSearchExpanded(true)}
                  className="absolute left-0 top-0 h-11 w-11 flex items-center justify-center z-10 text-zinc-800"
                >
                  <Search size={20} />
                </button>

                <input
                  ref={(input) => {
                    if (input && searchExpanded) input.focus();
                  }}
                  type="text"
                  placeholder="Search products..."
                  onBlur={() => setSearchExpanded(false)}
                  className={`w-full h-full pl-11 pr-10 bg-transparent outline-none text-sm transition-opacity duration-300 placeholder:text-zinc-400 ${
                    searchExpanded
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                />

                {searchExpanded && (
                  <button
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setSearchExpanded(false);
                    }}
                    className="absolute right-0 top-0 h-11 w-10 flex items-center justify-center text-zinc-400 hover:text-black z-10"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Desktop Icons */}
              <div className="hidden md:flex items-center gap-1 h-10 px-2 bg-zinc-50 rounded-full border border-zinc-100">
                <button className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-zinc-500 hover:text-black group">
                  <Heart size={18} />
                </button>
                <button className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-zinc-500 hover:text-black group relative">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-600 rounded-full border border-zinc-50" />
                </button>
              </div>

              {/* Account & Cart */}
              <div className="flex items-center gap-3 ml-2">
                <Link href="/account" className="hidden sm:block">
                  <UserCircle2
                    size={26}
                    className="text-zinc-400 hover:text-black transition-colors"
                  />
                </Link>

                <button className="relative flex items-center gap-3 bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-zinc-200 group">
                  <ShoppingBag size={18} />
                  <div className="hidden sm:flex flex-col items-start leading-none border-l border-white/20 pl-3">
                    <span className="text-[9px] font-black uppercase opacity-60">
                      Cart
                    </span>
                    <span className="text-[11px] font-bold">2 Items</span>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-blue-400 w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black border-2 border-white text-white">
                    2
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block bg-[#F1F2F4] w-full relative z-50 border-b border-zinc-100">
          <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
            <div className="flex items-center gap-10">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="relative group py-4 cursor-pointer"
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 group-hover:text-indigo-600 transition-all">
                    {cat.name}
                    <ChevronDown
                      size={14}
                      className="text-zinc-300 group-hover:text-indigo-600 group-hover:rotate-180 transition-all"
                    />
                  </span>

                  {/* Hover Underline Effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full" />

                  <AnimatePresence>
                    {activeCategory === cat.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-[100%] left-0 w-[650px] bg-white shadow-[0_40px_80px_rgba(0,0,0,0.06)] rounded-b-3xl p-8 grid grid-cols-2 gap-10 border border-zinc-100 z-50"
                      >
                        {/* Left: Navigation links */}
                        <div className="space-y-6">
                          <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                            Collections
                          </p>
                          <div className="flex flex-col gap-3">
                            {cat.items.map((item) => (
                              <Link
                                key={item}
                                href="#"
                                className="text-sm font-medium text-zinc-600 hover:text-indigo-600 hover:translate-x-1 transition-all"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right: Featured Promo with Soft Background */}
                        <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100/50">
                          <span className="text-[9px] font-black bg-white text-indigo-600 px-2 py-1 rounded shadow-sm uppercase">
                            Featured
                          </span>
                          <h4 className="text-xl font-bold text-zinc-900 mt-3">
                            {cat.featured}
                          </h4>
                          <div className="aspect-video bg-white/60 rounded-xl mt-4 shadow-inner" />
                          <button className="mt-5 text-[10px] font-bold uppercase text-indigo-600 flex items-center gap-2">
                            Shop Now <ArrowRight size={12} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Flash Deals with Rose color (Pinkish Red) */}
            <Link
              href="/deals"
              className="flex items-center gap-2 text-[11px] font-black uppercase text-rose-500 hover:text-rose-600"
            >
              <Sparkles size={14} className="animate-pulse" /> Flash Drops
            </Link>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN DESIGN --- */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              className="absolute top-full left-0 w-full bg-white border-t border-zinc-100 shadow-[0_30px_100px_rgba(0,0,0,0.1)] lg:hidden z-[200] overflow-hidden"
            >
              <div className="h-[calc(100dvh-5rem)] overflow-y-auto flex flex-col">
                <div className="px-6 py-8">
                  <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] mb-8">
                    Exploration
                  </p>
                  <div className="flex flex-col gap-6">
                    {menuItems.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href="#"
                          className="group flex items-center justify-between py-2"
                          onClick={() => setMobileMenu(false)}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold tracking-tighter text-zinc-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </span>
                            {item.count && (
                              <span className="text-[10px] font-bold px-2 py-0.5 bg-zinc-100 rounded-full text-zinc-400">
                                {item.count}
                              </span>
                            )}
                          </div>
                          <ArrowRight
                            className="text-zinc-200 group-hover:text-blue-600 group-hover:translate-x-2 transition-all"
                            size={24}
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-50 rounded-2xl flex flex-col gap-3">
                      <Heart size={20} className="text-zinc-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Wishlist
                      </span>
                    </div>
                    <div className="p-4 bg-zinc-50 rounded-2xl flex flex-col gap-3">
                      <User size={20} className="text-zinc-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Account
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1" />

                <div className="p-8 bg-zinc-950 rounded-t-[2.5rem] space-y-6 mt-4">
                  <div className="flex justify-between items-center text-white">
                    <h4 className="text-sm font-bold">Follow Our Story</h4>
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
                    Customer Support <ArrowUpRight size={14} />
                  </button>
                  <p className="text-[9px] text-zinc-500 font-bold text-center uppercase tracking-[0.2em] opacity-60">
                    © 2026 Vantage Collective
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
