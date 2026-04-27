"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  ChevronRight,
  ShieldCheck,
  Truck,
  RefreshCcw,
  Plus,
  Minus,
  CreditCard,
  Eye,
  ChevronLeft,
  Tag,
  Award,
  Zap,
  HelpCircle,
  Share2,
  ChevronDown,
} from "lucide-react";

const PRODUCT_DATA = {
  id: "PROD-102",
  name: "AERO AUDIO PRO MAX",
  category: "PREMIUM ACOUSTICS",
  price: 12499,
  originalPrice: 15999,
  rating: 4.9,
  reviewsCount: "2,480",
  seller: "CloudTail India",
  stockStatus: "In Stock",
  deliveryBy: "Friday, 1st May",
  origin: "India",
  description:
    "The pinnacle of sonic engineering. Features hybrid noise cancellation, titanium-coated drivers, and a signature minimalist aesthetic for the modern professional.",
  offers: [
    {
      title: "Bank Offer",
      desc: "Upto ₹1,250.00 discount on select Credit Cards",
    },
    {
      title: "No Cost EMI",
      desc: "Avail No Cost EMI on select cards for orders above ₹3000",
    },
    {
      title: "Partner Offer",
      desc: "Get GST invoice and save up to 28% on business purchases",
    },
  ],
  services: [
    { icon: <Truck size={20} />, label: "Free Delivery" },
    { icon: <RefreshCcw size={20} />, label: "7 Days Replacement" },
    { icon: <ShieldCheck size={20} />, label: "1 Year Warranty" },
    { icon: <Award size={20} />, label: "Top Brand" },
  ],
  techSpecs: [
    { label: "Brand", value: "Aero" },
    { label: "Model Name", value: "Pro Max 2026" },
    { label: "Color", value: "Slate Black" },
    { label: "Form Factor", value: "Over Ear" },
    { label: "Connectivity", value: "Bluetooth 5.3" },
    {
      label: "Special Feature",
      value: "Active Noise Cancellation, Transparency Mode",
    },
  ],
  faqs: [
    {
      q: "Can these be used for gaming?",
      a: "Yes, they feature a low-latency mode perfect for gaming.",
    },
    {
      q: "How long does the battery last with ANC on?",
      a: "The battery lasts up to 40 hours with ANC enabled.",
    },
  ],
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1200",
    "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1200",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200",
  ],
  similarProducts: [
    {
      id: 1,
      name: "Aero Buds Mini",
      price: 2999,
      img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600",
    },
    {
      id: 2,
      name: "Studio Monitor Z",
      price: 28999,
      img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=600",
    },
    {
      id: 3,
      name: "Sonic Boom 2.0",
      price: 8499,
      img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=600",
    },
    {
      id: 4,
      name: "Aura Pods Elite",
      price: 5999,
      img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=600",
    },
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState("");
  const [activeTab, setActiveTab] = useState("Description");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const offset = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };
  const AccordionItem = ({ faq }: { faq: { q: string; a: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-zinc-100 last:border-0 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-6 text-left group"
        >
          <p className="flex gap-4 text-zinc-950 font-black text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">
            <span className="text-zinc-300">Q:</span> {faq.q}
          </p>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-zinc-400 group-hover:text-zinc-950"
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="pb-8 pl-10 flex gap-4">
                <span className="text-blue-600 font-black text-sm uppercase">
                  A:
                </span>
                <p className="text-zinc-600 text-sm font-medium leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 pb-20">
      <section className="py-8 lg:py-16 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* --- Path --- */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">
          <span>Catalog</span> <ChevronRight size={10} />
          <span>Product</span> <ChevronRight size={10} />
          <span className="text-zinc-900">{PRODUCT_DATA.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* --- LEFT: GALLERY --- */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-45 flex flex-col md:flex-row gap-6 lg:h-[550px] self-start">
              {/* --- Thumbnails --- */}
              <div className="order-2 md:order-1 flex md:flex-col gap-3 no-scrollbar overflow-x-auto md:overflow-y-auto shrink-0">
                {PRODUCT_DATA.images.map((img, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setSelectedImage(i)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shrink-0 ${
                      selectedImage === i
                        ? "border-blue-600"
                        : "border-zinc-100 grayscale hover:grayscale-0"
                    }`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </button>
                ))}
              </div>

              {/* --- Main Image Container --- */}
              <div className="order-1 md:order-2 flex-1 relative rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 aspect-square h-auto md:h-full min-h-[350px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    src={PRODUCT_DATA.images[selectedImage]}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Product display"
                  />
                </AnimatePresence>

                {/* Floating Buttons */}
                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-all"
                  >
                    <Heart
                      size={20}
                      className={
                        isWishlisted
                          ? "fill-rose-500 text-rose-500"
                          : "text-zinc-400"
                      }
                    />
                  </button>
                  <button className="p-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-all">
                    <Share2 size={20} className="text-zinc-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="bg-blue-50 text-blue-600 text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase">
                  {PRODUCT_DATA.category}
                </span>
                <h1 className="text-4xl lg:text-6xl font-black text-zinc-900 tracking-tight uppercase leading-[0.9] lg:leading-[0.85]">
                  {PRODUCT_DATA.name}
                </h1>
              </div>

              {/* Product Main Highlights - Descriptive Points */}
              <div className="space-y-2 border-l-2 border-blue-600 pl-4 py-1">
                {PRODUCT_DATA.techSpecs.slice(4, 6).map((spec, i) => (
                  <p
                    key={i}
                    className="text-[11px] lg:text-xs font-bold text-zinc-600 leading-snug uppercase tracking-tight"
                  >
                    {spec.value}
                  </p>
                ))}
                <p className="text-[11px] lg:text-xs font-bold text-zinc-600 leading-snug uppercase tracking-tight">
                  {PRODUCT_DATA.description.split(".")[0]}.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1 bg-emerald-600 text-white px-2 py-0.5 rounded text-xs font-bold">
                  {PRODUCT_DATA.rating}{" "}
                  <Star size={10} className="fill-white" />
                </div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-l border-zinc-200 pl-4">
                  {PRODUCT_DATA.reviewsCount} Verified Ratings
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl lg:text-6xl font-black text-zinc-950 italic tracking-tighter">
                  ₹{PRODUCT_DATA.price.toLocaleString()}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-emerald-600 font-black uppercase tracking-tighter">
                    22% Special Discount
                  </span>
                  <span className="text-lg text-zinc-300 line-through font-bold leading-none">
                    ₹{PRODUCT_DATA.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 pt-2">
                <CreditCard size={14} className="text-blue-600" />{" "}
                {PRODUCT_DATA.emi}
              </p>
            </div>

            {/* Amazon Style Offers - Hidden scroll on mobile for better space */}
            <div className="flex md:grid md:grid-cols-3 gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {PRODUCT_DATA.offers.map((offer, i) => (
                <div
                  key={i}
                  className="min-w-[200px] md:min-w-0 p-4 border border-zinc-100 rounded-2xl bg-[#fafafa] space-y-2 hover:border-blue-200 transition-colors"
                >
                  <Tag size={14} className="text-blue-600" />
                  <p className="text-[10px] font-black text-zinc-950 uppercase leading-tight">
                    {offer.title}
                  </p>
                  <p className="text-[9px] text-zinc-500 font-medium leading-tight">
                    {offer.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* --- Action Buttons: Stacked on Mobile, Inline on Desktop --- */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex items-center justify-between sm:justify-center border-2 border-zinc-100 rounded-xl bg-white px-4 py-3 sm:py-0">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-zinc-900 shadow-sm hover:bg-zinc-950 hover:text-white transition-all active:scale-90"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} strokeWidth={3} />
                </button>

                <span className="w-14 text-center font-black text-lg text-zinc-950 tabular-nums">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-zinc-900 shadow-sm hover:bg-zinc-950 hover:text-white transition-all active:scale-90"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
              <button className="group flex-1 bg-zinc-950 text-white py-5 px-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all active:scale-[0.98] shadow-xl shadow-zinc-200">
                <ShoppingBag
                  size={18}
                  className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300"
                />
                <span>Add to Cart</span>
              </button>

              {/* Buy Now Button */}
              <button className="group flex-1 bg-blue-600 text-white py-5 px-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-zinc-950 transition-all active:scale-[0.98] shadow-xl shadow-blue-900/20">
                <Zap
                  size={18}
                  className="fill-white group-hover:animate-pulse"
                />
                <span>Buy Now</span>
              </button>
            </div>

            {/* Service Badges with subtle divider */}
            <div className="grid grid-cols-4 gap-4 py-8 border-y border-zinc-100">
              {PRODUCT_DATA.services.map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-2 group cursor-default"
                >
                  <div className="text-zinc-400 group-hover:text-blue-600 transition-colors duration-500 transform group-hover:scale-110">
                    {service.icon}
                  </div>
                  <p className="text-[8px] font-black text-zinc-400 uppercase leading-none tracking-tighter">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Pincode & Delivery */}
            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-center bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                <div className="flex items-center gap-3">
                  <Truck size={18} className="text-blue-600" />
                  <div>
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">
                      FREE DELIVERY BY
                    </p>
                    <p className="text-xs font-black text-zinc-900 uppercase">
                      {PRODUCT_DATA.deliveryBy}
                    </p>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-zinc-200"></div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none">
                    TRUSTED SELLER
                  </p>
                  <p className="text-xs font-black text-blue-600 underline uppercase">
                    {PRODUCT_DATA.seller.split(" ")[0]}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 group">
                <input
                  type="text"
                  placeholder="ENTER PINCODE FOR FASTEST DELIVERY"
                  className="bg-white border-2 border-zinc-100 rounded-xl px-4 py-4 text-[10px] font-black flex-1 focus:outline-none focus:border-blue-600 transition-all placeholder:text-zinc-300"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
                <button className="bg-zinc-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95">
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- FULL WIDTH TABS SECTION --- */}
        <div className="mt-32 border-t border-zinc-100 pt-16">
          <div className="flex gap-12 border-b border-zinc-100 mb-12 overflow-x-auto no-scrollbar">
            {["Description", "Additional Info", "Questions", "Reviews"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-6 text-[11px] font-black uppercase tracking-[0.3em] transition-all relative whitespace-nowrap ${activeTab === tab ? "text-blue-600" : "text-zinc-400 hover:text-zinc-950"}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600"
                    />
                  )}
                </button>
              ),
            )}
          </div>

          <div className="w-full">
            <AnimatePresence mode="wait">
              {/* DESCRIPTION TAB */}
              {activeTab === "Description" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div className="space-y-6">
                    <h4 className="text-3xl font-black text-zinc-950 uppercase tracking-tighter leading-none">
                      Precision{" "}
                      <span className="text-blue-600 italic">Protection.</span>
                    </h4>
                    <p className="text-lg text-zinc-900 font-bold leading-relaxed">
                      {PRODUCT_DATA.description}
                    </p>
                    <p className="text-zinc-600 font-medium leading-relaxed italic">
                      "Designed for those who demand precision and style in
                      every single detail. A second skin for your gear."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100">
                    <DetailItem
                      label="Primary Material"
                      value="Premium Silicone"
                    />
                    <DetailItem
                      label="Country of Origin"
                      value={PRODUCT_DATA.origin}
                    />
                    <DetailItem label="Package Weight" value="240 Grams" />
                    <DetailItem label="Model" value="Pro Max 2026" />
                  </div>
                </motion.div>
              )}
              {/* 2. ADDITIONAL INFO - Less important technical data */}
              {activeTab === "Additional Info" && (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-20"
                >
                  {[
                    { label: "Unit Weight", value: "240 Grams" },
                    { label: "Compatibility", value: "Aero Pro 2026 Series" },
                    { label: "Package Weight", value: "350 Grams" },
                    { label: "HSN Code", value: "85189000" },
                    { label: "Maintenance", value: "Washable / Wipe Clean" },
                    { label: "Warranty Type", value: "Domestic Carry-in" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-6 border-b border-zinc-100"
                    >
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em]">
                        {item.label}
                      </span>
                      <span className="text-sm font-black text-zinc-950 uppercase">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
              {activeTab === "Questions" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-[1400px]"
                >
                  {/* Search Input Box */}
                  <div className="relative mb-12 group">
                    <input
                      type="text"
                      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
                      className="w-full p-6 bg-zinc-100 border border-zinc-200 rounded-[2rem] text-[11px] font-black uppercase tracking-widest text-zinc-950 placeholder:text-zinc-500 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all pl-14 shadow-sm"
                    />
                    <HelpCircle
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-600 transition-colors"
                      size={20}
                    />
                  </div>

                  {/* Accordion List */}
                  <div className="space-y-2 bg-white rounded-[2.5rem] p-4 md:p-8 border border-zinc-50 shadow-sm">
                    {PRODUCT_DATA.faqs.map((faq, i) => (
                      <AccordionItem key={i} faq={faq} />
                    ))}
                  </div>

                  {/* CTA for more questions */}
                  <div className="mt-12 p-8 bg-blue-50 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1 text-center md:text-left">
                      <p className="text-xs font-black text-blue-600 uppercase tracking-widest">
                        Didn't find your answer?
                      </p>
                      <p className="text-sm font-bold text-zinc-900">
                        Ask the community or the seller directly.
                      </p>
                    </div>
                    <button className="px-8 py-4 bg-zinc-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95">
                      Ask a Question
                    </button>
                  </div>
                </motion.div>
              )}
              {activeTab === "Reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full space-y-10 md:space-y-16"
                >
                  {/* --- 1. REVIEWS SUMMARY HEADER (Fully Responsive) --- */}
                  <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:items-center justify-between border-b border-zinc-100 pb-10 md:pb-16">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
                      {/* Big Rating Number - Centered on Mobile */}
                      <div className="space-y-2 text-center md:text-left">
                        <div className="flex items-baseline justify-center md:justify-start gap-2">
                          <h4 className="text-5xl md:text-7xl font-black text-zinc-950 tracking-tighter">
                            4.9
                          </h4>
                          <span className="text-lg md:text-xl font-bold text-zinc-300 uppercase">
                            / 5.0
                          </span>
                        </div>
                        <div className="flex justify-center md:justify-start gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pt-1">
                          2,480 Verified Ratings
                        </p>
                      </div>

                      {/* Rating Bars (Amazon Style) - Scales on Mobile */}
                      <div className="w-full md:w-64 space-y-2.5">
                        {[5, 4, 3, 2, 1].map((star) => (
                          <div
                            key={star}
                            className="flex items-center gap-3 md:gap-4 group"
                          >
                            <span className="text-[10px] font-black text-zinc-400 w-3">
                              {star}
                            </span>
                            <div className="flex-1 h-1 bg-zinc-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{
                                  width:
                                    star === 5
                                      ? "92%"
                                      : star === 4
                                        ? "6%"
                                        : "2%",
                                }}
                                className="h-full bg-zinc-950"
                              />
                            </div>
                            <span className="text-[9px] font-bold text-zinc-300 w-8 text-right">
                              {star === 5 ? "92%" : star === 4 ? "6%" : "2%"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button: Full width on mobile, Auto on desktop */}
                    <button className="w-full lg:w-auto px-10 py-5 bg-zinc-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-zinc-100">
                      Write a Review
                    </button>
                  </div>

                  {/* --- 2. SINGLE COLUMN REVIEWS LIST --- */}
                  <div className="w-full max-w-[1400px] space-y-2 md:space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div
                        key={review}
                        className="group space-y-6 pb-12 md:pb-16 border-b border-zinc-50 last:border-0"
                      >
                        {/* Reviewer Header - Better Layout for Mobile */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center font-black text-xs text-zinc-400">
                              JS
                            </div>
                            <div>
                              <p className="text-xs font-black text-zinc-950 uppercase tracking-tight">
                                Jitendra Suthar
                              </p>
                              <div className="flex gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={10}
                                    className="fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 self-start sm:self-auto">
                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                            <span className="text-[8px] font-black text-emerald-600 uppercase tracking-[0.2em]">
                              Verified Purchase
                            </span>
                          </div>
                        </div>

                        {/* Review Content - Readable font size for mobile */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-black text-zinc-950 uppercase tracking-tight">
                            Premium Build & Perfect Fit
                          </h5>
                          <p className="text-base md:text-lg text-zinc-700 font-medium leading-relaxed italic">
                            "Absolutely stunning build quality. The gear
                            protection is much better than expected and it fits
                            like a second skin. Definitely worth every rupee for
                            a premium setup!"
                          </p>
                        </div>

                        {/* Review Footer - Stackable for Mobile */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-6">
                          <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">
                            27 April 2026
                          </span>
                          <div className="hidden sm:block h-[1px] w-8 bg-zinc-100" />
                          <button className="text-[9px] font-black text-zinc-400 uppercase tracking-widest hover:text-zinc-950 transition-colors">
                            Helpful (24)
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- SIMILAR PRODUCTS --- */}
        <div className="mt-32 space-y-12">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase">
                You may also like
              </p>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-zinc-950">
                Related{" "}
                <span className="text-zinc-200 italic font-light outline-text">
                  Gear
                </span>
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-xl border border-zinc-100 hover:bg-zinc-950 hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 rounded-xl border border-zinc-100 hover:bg-zinc-950 hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-8"
          >
            {PRODUCT_DATA.similarProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>{" "}
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px #e5e7eb;
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}

// Sub-components
const DetailItem = ({ label, value }: any) => (
  <div className="space-y-1">
    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
      {label}
    </span>
    <p className="text-sm font-black text-zinc-950 uppercase tracking-tight">
      {value}
    </p>
  </div>
);

// --- PRODUCT CARD COMPONENT (Matching Trending Section Exactly) ---
const ProductCard = ({ product }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
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
            RECOMMENDED
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

      <div className="mt-8 px-2 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
            ELECTRONICS
          </span>
          <div className="flex items-center gap-1.5">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[11px] font-black text-zinc-900">4.8</span>
          </div>
        </div>
        <h3 className="text-2xl font-black text-zinc-950 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
          {product.name}
        </h3>
        <span className="text-3xl font-black text-zinc-950 italic tracking-tighter">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
    </motion.div>
  );
};
