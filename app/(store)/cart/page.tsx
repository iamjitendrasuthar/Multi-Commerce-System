"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Plus,
  Trash2,
  Heart,
  ChevronRight,
  Minus,
  Edit3,
  X,
  Lock,
  Truck,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

interface Address {
  id: number;
  tag: string;
  name: string;
  detail: string;
  city: string;
  pin: string;
}

export default function UltimateCheckout() {
  const [step, setStep] = useState(1);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "iPhone 17 Pro",
      price: 129900,
      qty: 1,
      img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800",
      color: "Natural Titanium",
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: 249900,
      qty: 1,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800",
      color: "Space Black",
    },
  ]);

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 0,
      tag: "Work",
      name: "Jitendra Suthar",
      detail: "Sector 62, Digital Park",
      city: "Noida, UP",
      pin: "201301",
    },
    {
      id: 1,
      tag: "Home",
      name: "Jitendra Suthar",
      detail: "Main Market Road",
      city: "Jalore, Rajasthan",
      pin: "343001",
    },
  ]);
  const [selectedAddrId, setSelectedAddrId] = useState(0);
  const [isAddrModalOpen, setIsAddrModalOpen] = useState(false);
  const [editingAddr, setEditingAddr] = useState<Address | null>(null);

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.qty, 0),
    [items],
  );
  const gst = subtotal * 0.18;
  const finalTotal = subtotal + gst;

  const handleQty = (id: number, delta: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const handleSaveAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newAddr: Address = {
      id: editingAddr ? editingAddr.id : Date.now(),
      tag: formData.get("tag") as string,
      name: formData.get("name") as string,
      detail: formData.get("detail") as string,
      city: formData.get("city") as string,
      pin: formData.get("pin") as string,
    };
    setAddresses((prev) =>
      editingAddr
        ? prev.map((a) => (a.id === editingAddr.id ? newAddr : a))
        : [...prev, newAddr],
    );
    setIsAddrModalOpen(false);
    setEditingAddr(null);
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-zinc-950 font-sans selection:bg-blue-100">
      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* LEFT: EXIT */}
          <div className="flex-1 lg:w-1/4">
            <Link href="/cart" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:bg-zinc-50 transition-colors">
                <ChevronLeft size={16} className="text-zinc-600" />
              </div>
              <span className="hidden lg:block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-950 transition-colors">
                Exit
              </span>
            </Link>
          </div>

          {/* CENTER: STEPPER (Optimized for Mobile) */}
          <div className="flex-[2] flex justify-center">
            <div className="flex items-center gap-1 bg-zinc-100/80 p-1 sm:p-1.5 rounded-full border border-zinc-200 shadow-sm">
              {/* Logistics Step */}
              <div className="flex items-center gap-1.5 px-3 sm:px-6 py-1.5 sm:py-2.5 bg-white rounded-full border border-blue-100 shadow-sm relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-blue-50/50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center gap-1.5">
                  <div className="bg-blue-600 p-0.5 sm:p-1 rounded-full">
                    <CheckCircle2 size={10} className="text-white" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-zinc-900">
                    Logistics
                  </span>
                </div>
              </div>

              {/* Small Progress Line */}
              <div className="w-4 sm:w-8 h-[2px] bg-zinc-200 mx-0.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "30%" }}
                  animate={{ width: "60%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-full bg-blue-500/50"
                />
              </div>

              {/* Payment Step */}
              <div className="flex items-center gap-1.5 px-3 sm:px-6 py-1.5 sm:py-2.5 bg-zinc-50/50 rounded-full border border-zinc-200/50 opacity-60">
                <Lock size={10} className="text-zinc-400" />
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-zinc-400">
                  Payment
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: TOTAL */}
          <div className="flex-1 flex flex-col items-end min-w-fit">
            <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] sm:tracking-[0.3em] text-blue-600 leading-none mb-0.5">
              Payable
            </span>
            <span className="text-sm sm:text-2xl font-[1000] italic tracking-tighter leading-none">
              ₹{finalTotal.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      </nav>

      {/* ─── MAIN ─── */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key="logistics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12"
          >
            {/* LEFT: CART & ADDRESS */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Cart Section */}
              <section className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-zinc-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="p-5 sm:p-7 lg:p-10">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
                    <div className="p-2.5 sm:p-3 bg-zinc-950 text-white rounded-xl sm:rounded-2xl">
                      <Truck
                        size={16}
                        strokeWidth={2.5}
                        className="sm:hidden"
                      />
                      <Truck
                        size={20}
                        strokeWidth={2.5}
                        className="hidden sm:block"
                      />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-[1000] italic uppercase tracking-tighter">
                      Your Selection
                    </h2>
                  </div>

                  <div className="space-y-7 sm:space-y-8 lg:space-y-10">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 sm:gap-6 lg:gap-8 group"
                      >
                        {/* Product image */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-zinc-50 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-3 sm:p-5 lg:p-6 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                          <img
                            src={item.img}
                            className="w-full h-full object-contain mix-blend-multiply"
                            alt={item.name}
                          />
                        </div>

                        {/* Product info */}
                        <div className="flex-1 py-1 flex flex-col justify-between min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <div className="min-w-0">
                              <h3 className="font-black text-base sm:text-xl lg:text-2xl tracking-tight truncate">
                                {item.name}
                              </h3>
                              <p className="text-zinc-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-1">
                                {item.color}
                              </p>
                            </div>
                            <p className="font-black text-base sm:text-xl lg:text-2xl italic tracking-tighter shrink-0">
                              ₹{(item.price * item.qty).toLocaleString("en-IN")}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 sm:pt-5">
                            {/* Qty control */}
                            <div className="flex items-center gap-3 sm:gap-5 bg-zinc-100/80 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl border border-zinc-200/50">
                              <button
                                onClick={() => handleQty(item.id, -1)}
                                className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-lg sm:rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all"
                              >
                                <Minus size={12} className="sm:hidden" />
                                <Minus size={14} className="hidden sm:block" />
                              </button>
                              <span className="font-black text-xs sm:text-sm w-4 text-center">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => handleQty(item.id, 1)}
                                className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center bg-white rounded-lg sm:rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all"
                              >
                                <Plus size={12} className="sm:hidden" />
                                <Plus size={14} className="hidden sm:block" />
                              </button>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-1 sm:gap-2">
                              <button className="p-2 sm:p-3 text-zinc-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl sm:rounded-2xl transition-all">
                                <Heart size={16} className="sm:hidden" />
                                <Heart size={20} className="hidden sm:block" />
                              </button>
                              <button className="p-2 sm:p-3 text-zinc-300 hover:text-red-500 hover:bg-red-50 rounded-xl sm:rounded-2xl transition-all">
                                <Trash2 size={16} className="sm:hidden" />
                                <Trash2 size={20} className="hidden sm:block" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Shipping / Address Section */}
              <section className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-zinc-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-5 sm:p-7 lg:p-10">
                <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-[1000] italic uppercase tracking-tighter text-zinc-950">
                    Destination
                  </h2>
                  <button
                    onClick={() => {
                      setEditingAddr(null);
                      setIsAddrModalOpen(true);
                    }}
                    className="px-4 sm:px-6 py-2.5 sm:py-3 bg-zinc-950 text-white rounded-xl sm:rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
                  >
                    + New
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddrId(addr.id)}
                      className={`p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border-2 transition-all duration-500 relative cursor-pointer group ${selectedAddrId === addr.id ? "border-zinc-950 bg-white shadow-2xl" : "border-zinc-100 bg-zinc-50/50 hover:border-zinc-200"}`}
                    >
                      <div className="flex justify-between mb-4 sm:mb-6">
                        <span
                          className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase transition-colors ${selectedAddrId === addr.id ? "bg-blue-600 text-white" : "bg-zinc-200 text-zinc-500"}`}
                        >
                          {addr.tag}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingAddr(addr);
                            setIsAddrModalOpen(true);
                          }}
                          className="p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-zinc-950 transition-all"
                        >
                          <Edit3 size={15} />
                        </button>
                      </div>
                      <h4 className="font-black text-base sm:text-xl tracking-tight">
                        {addr.name}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed font-medium">
                        {addr.detail}, {addr.city} - {addr.pin}
                      </p>
                      {selectedAddrId === addr.id && (
                        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 w-5 h-5 sm:w-6 sm:h-6 bg-zinc-950 rounded-full flex items-center justify-center text-white">
                          <CheckCircle2 size={12} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT: SUMMARY SIDEBAR */}
            {/* On mobile: normal flow below; on lg: sticky sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <div className="bg-zinc-950 rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-8 lg:p-10 text-white shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full group-hover:bg-blue-600/30 transition-all duration-1000" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-7 sm:mb-10 lg:mb-12 border-b border-white/10 pb-5 sm:pb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-zinc-500">
                      Cart Summary
                    </span>
                    <Lock size={16} className="text-blue-500" />
                  </div>

                  {/* Line items – 2-col grid on mobile for compactness */}
                  <div className="grid grid-cols-2 gap-y-4 sm:block sm:space-y-5 mb-8 sm:mb-12">
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] font-black uppercase tracking-widest text-zinc-400">
                      <span>Items Value</span>
                      <span className="text-white mt-1 sm:mt-0">
                        ₹{subtotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] font-black uppercase tracking-widest text-zinc-400">
                      <span>GST (18%)</span>
                      <span className="text-white mt-1 sm:mt-0">
                        ₹{gst.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-[11px] font-black uppercase tracking-widest text-emerald-500 col-span-2 sm:col-auto">
                      <span>Shipping</span>
                      <span className="mt-1 sm:mt-0">FREE</span>
                    </div>
                  </div>

                  <div className="pt-5 sm:pt-8 border-t border-white/10 mb-7 sm:mb-12">
                    <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-1.5 sm:mb-2">
                      Total Payable
                    </p>
                    <p className="text-5xl sm:text-6xl lg:text-7xl font-[1000] italic tracking-tighter leading-none">
                      ₹{finalTotal.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <Link href={`/checkout?amount=${finalTotal}`}>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full py-5 sm:py-7 bg-blue-600 hover:bg-blue-700 text-white rounded-[1.5rem] sm:rounded-[2rem] font-[1000] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[11px] sm:text-[12px] flex items-center justify-center gap-3 sm:gap-4 shadow-xl shadow-blue-600/20 transition-all active:scale-95 group/btn"
                    >
                      Proceed to Pay
                      <ChevronRight
                        size={18}
                        className="group-hover/btn:translate-x-2 transition-transform"
                      />
                    </button>
                  </Link>
                  <p className="mt-5 sm:mt-8 text-center text-[9px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-zinc-600">
                    Secure AES-256 Payment Gateway
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ─── MODAL: ADDRESS ─── */}
      <AnimatePresence>
        {isAddrModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddrModalOpen(false)}
              className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
            />
            {/* Bottom-sheet on mobile, centered modal on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              className="relative w-full sm:max-w-lg bg-white rounded-t-[2.5rem] sm:rounded-[3.5rem] p-7 sm:p-12 shadow-3xl overflow-hidden max-h-[90dvh] overflow-y-auto"
            >
              {/* Drag handle visible on mobile */}
              <div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mb-6 sm:hidden" />

              <div className="flex justify-between items-center mb-7 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-[1000] italic uppercase tracking-tighter">
                  {editingAddr ? "Modify" : "New"} Address
                </h3>
                <button
                  onClick={() => setIsAddrModalOpen(false)}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form
                onSubmit={handleSaveAddress}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <input
                    name="tag"
                    placeholder="Tag (Home/Work)"
                    defaultValue={editingAddr?.tag}
                    required
                    className="w-full p-4 sm:p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 rounded-xl sm:rounded-2xl font-bold text-sm outline-none transition-all uppercase"
                  />
                  <input
                    name="name"
                    placeholder="Full Name"
                    defaultValue={editingAddr?.name}
                    required
                    className="w-full p-4 sm:p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 rounded-xl sm:rounded-2xl font-bold text-sm outline-none transition-all"
                  />
                </div>
                <input
                  name="detail"
                  placeholder="Street Address"
                  defaultValue={editingAddr?.detail}
                  required
                  className="w-full p-4 sm:p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 rounded-xl sm:rounded-2xl font-bold text-sm outline-none transition-all"
                />
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <input
                    name="city"
                    placeholder="City"
                    defaultValue={editingAddr?.city}
                    required
                    className="w-full p-4 sm:p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 rounded-xl sm:rounded-2xl font-bold text-sm outline-none transition-all"
                  />
                  <input
                    name="pin"
                    placeholder="Pincode"
                    defaultValue={editingAddr?.pin}
                    required
                    className="w-full p-4 sm:p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 rounded-xl sm:rounded-2xl font-bold text-sm outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 sm:py-6 bg-zinc-950 text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-xl hover:bg-blue-600 transition-all mt-2"
                >
                  Confirm & Save
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
