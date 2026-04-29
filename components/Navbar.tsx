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
  Globe,
  Compass,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
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
          <div className="max-w-[1440px] mx-auto px-5 lg:px-2 flex items-center justify-between gap-4">
            {/* Left: Hamburger (Mobile) & Logo - Hides on Mobile when Search Opens */}
            <div
              className={`flex items-center gap-4 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                searchExpanded
                  ? "absolute -translate-x-8 opacity-0 pointer-events-none sm:relative sm:translate-x-0 sm:opacity-100 sm:pointer-events-auto"
                  : "relative translate-x-0 opacity-100"
              }`}
            >
              <button
                className="lg:hidden hover:bg-zinc-100 rounded-full text-black transition-colors"
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
                    ? "bg-zinc-100 w-[calc(100vw-110px)] sm:w-[450px]"
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
                  className={`w-full h-full pl-11 pr-10 bg-transparent outline-none text-sm text-zinc-950 transition-opacity duration-300 placeholder:text-zinc-400 ${
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
                <button className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-zinc-500 hover:text-black group cursor-pointer">
                  <Heart size={18} />
                </button>
                <button className="p-2 hover:bg-white hover:shadow-sm rounded-full transition-all text-zinc-500 hover:text-black group relative cursor-pointer">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-600 rounded-full border border-zinc-50" />
                </button>
              </div>

              {/* Account & Cart */}
              <div className="flex items-center gap-4 ml-2">
                {/* LOGIN SECTION */}
                <Link href="/login" className="hidden sm:block group">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-full transition-all duration-300">
                    {/* Icon with Hover Animation */}
                    <div className="relative">
                      <UserCircle2
                        size={24}
                        strokeWidth={1.5}
                        className="text-zinc-400 group-hover:text-black group-hover:scale-110 transition-all duration-500 ease-out"
                      />
                    </div>

                    {/* Modern Login Text */}
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-[12px] font-black uppercase tracking-[0.15em] text-zinc-900 relative">
                        Login
                        {/* Subtle Underline Animation */}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-600 transition-all duration-500 group-hover:w-full" />
                      </span>
                    </div>
                  </div>
                </Link>

                {/* CART SECTION */}
                <Link href={"/cart"}>
                  <div className="relative inline-block">
                    <button className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full overflow-hidden bg-zinc-900 text-white transition-all duration-500 shadow-xl shadow-zinc-200 active:scale-95 cursor-pointer">
                      <div className="relative z-10 flex items-center gap-3">
                        <ShoppingBag size={18} />
                        <div className="hidden sm:flex flex-col items-start leading-none border-l border-white/20 pl-3">
                          <span className="text-[9px] font-black uppercase opacity-60">
                            Cart
                          </span>
                          <span className="text-[11px] font-bold">2 Items</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>

                    <div className="absolute -top-1 -right-1 bg-blue-400 w-4 h-4 rounded-full text-[9px] flex items-center justify-center font-black border-2 border-white text-white z-20">
                      2
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block bg-[#dcdcde] w-full relative z-50">
          <div className="max-w-[1440px] mx-auto px-10 lg:px-4 flex items-center justify-between">
            <div className="flex items-center gap-10">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="relative group py-4 cursor-pointer"
                  // @ts-ignore
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-600 group-hover:text-indigo-600 transition-all">
                    {cat.name}
                    <ChevronDown
                      size={14}
                      className="text-zinc-600 group-hover:text-indigo-600 group-hover:rotate-180 transition-all"
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

        {/* --- COMPACT PREMIUM MOBILE DROPDOWN --- */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              // Left side se slide karne ke liye x: "-100%"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="fixed inset-0 top-0 left-0 w-full h-[100dvh] bg-white lg:hidden z-[300] flex flex-col shadow-2xl"
            >
              {/* 1. HEADER (Inside Dropdown) */}
              <div className="p-6 flex items-center justify-between border-b border-zinc-50 h-[72px] relative">
                {" "}
                {activeSubmenu ? (
                  <button
                    onClick={() => setActiveSubmenu(null)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600"
                  >
                    <ChevronLeft size={16} /> Back
                  </button>
                ) : (
                  <Link href="/" className="relative group">
                    <span className="text-2xl font-[1000] tracking-[-0.08em] text-black italic">
                      VANTAGE<span className="text-blue-600 not-italic">.</span>
                    </span>
                  </Link>
                )}
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    setActiveSubmenu(null);
                  }}
                >
                  <X size={24} className="text-zinc-950" />
                </button>
              </div>

              {/* 2. SCROLLABLE CONTENT AREA */}
              <div className="flex-grow overflow-y-auto no-scrollbar relative">
                <AnimatePresence mode="wait">
                  {!activeSubmenu ? (
                    // MAIN MENU
                    <motion.div
                      key="main-menu"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="px-8 py-6 space-y-6"
                    >
                      <div className="flex flex-col gap-5">
                        {categories.map((cat, i) => (
                          <button
                            key={cat.name}
                            onClick={() => setActiveSubmenu(cat)}
                            className="flex items-center justify-between group"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] font-bold text-zinc-300 tabular-nums">
                                0{i + 1}
                              </span>
                              <span className="text-xl font-bold tracking-tight text-zinc-950 uppercase">
                                {cat.name}
                              </span>
                            </div>
                            <ChevronRight size={18} className="text-zinc-300" />
                          </button>
                        ))}
                      </div>

                      {/* Quick Links Grid */}
                      <div className="grid grid-cols-2 gap-3 pt-6">
                        <Link
                          href="/wishlist"
                          className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl"
                        >
                          <Heart size={16} className="text-zinc-400" />
                          <span className="text-[9px] font-black uppercase text-zinc-950">
                            Wishlist
                          </span>
                        </Link>
                        <Link
                          href="/login"
                          className="flex items-center gap-3 p-4 bg-zinc-50 rounded-2xl"
                        >
                          <User size={16} className="text-zinc-400" />
                          <span className="text-[9px] font-black uppercase text-zinc-950">
                            Login
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    // SUBMENU (Categories)
                    <motion.div
                      key="sub-menu"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="px-8 py-6 space-y-8"
                    >
                      <div>
                        <h3 className="text-3xl font-black tracking-tighter text-zinc-950 uppercase mb-2">
                          {activeSubmenu.name}
                        </h3>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest italic">
                          Featured: {activeSubmenu.featured}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4 border-l border-zinc-100 pl-4">
                        {activeSubmenu.items.map((item) => (
                          <Link
                            key={item}
                            href="#"
                            className="text-sm font-bold text-zinc-500 hover:text-blue-600 uppercase tracking-wide"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. STICKY DARK FOOTER (Always at bottom) */}
              <div className="bg-zinc-950 p-8 rounded-t-[2.5rem] mt-auto">
                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                      Vantage Drop
                    </h4>
                    {/* Social Media SVG Icons */}
                    <div className="flex gap-4 text-white/50">
                      {/* Instagram */}
                      <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
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
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
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
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      {/* YouTube */}
                      <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
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
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path>
                          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                        </svg>
                      </a>
                      {/* Facebook */}
                      <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
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
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-[9px] uppercase tracking-[0.2em] mb-6 shadow-xl shadow-blue-900/20 active:scale-95 transition-all">
                  Customer Concierge
                </button>

                <div className="flex items-center justify-around opacity-30">
                  <div className="flex items-center gap-2">
                    <Globe size={10} className="text-white" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">
                      Global Shipping
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass size={10} className="text-white" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">
                      Crafted Legacy
                    </span>
                  </div>
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
