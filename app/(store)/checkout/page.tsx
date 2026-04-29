"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Banknote,
  ChevronLeft,
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentForm() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const finalTotal = amount ? parseFloat(amount) : 12450;
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen font-sans text-zinc-950 antialiased">
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
                Back
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
                  <CheckCircle2 size={10} className="text-zinc-400" />
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-zinc-400">
                    Logistics
                  </span>
                </div>
              </div>

              <div className="w-4 sm:w-8 h-[2px] bg-zinc-200 mx-0.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "60%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="h-full bg-blue-500/50"
                />
              </div>

              {/* Payment Step */}
              <div className="flex items-center gap-1.5 px-3 sm:px-6 py-1.5 sm:py-2.5 bg-white rounded-full border border-blue-100 shadow-sm relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-blue-50/50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center gap-1.5">
                  <div className="bg-blue-600 p-0.5 sm:p-1 rounded-full">
                    <Lock size={10} className="text-white" />
                  </div>
                  <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider sm:tracking-widest text-zinc-900">
                    Payment
                  </span>
                </div>
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
      <main className="max-w-[1440px] mx-auto px-10 py-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: PAYMENT OPTIONS (Col 5) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="space-y-2">
              <h1 className="text-5xl font-[1000] italic uppercase tracking-tighter">
                Pay<span className="text-blue-600">.</span>
              </h1>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.3em]">
                Select your gateway
              </p>
            </div>

            <div className="grid gap-3">
              {[
                {
                  id: "card",
                  label: "Credit/Debit Card",
                  icon: CreditCard,
                  desc: "Visa, Master, Amex",
                },
                {
                  id: "upi",
                  label: "UPI / Mobile",
                  icon: Smartphone,
                  desc: "Instant Scan",
                },
                {
                  id: "cod",
                  label: "Pay on Delivery",
                  icon: Banknote,
                  desc: "Cash or QR",
                },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`group w-full flex items-center justify-between p-5 rounded-[1.5rem] border-2 transition-all duration-300 ${
                    paymentMethod === m.id
                      ? "border-zinc-950 bg-white shadow-xl scale-[1.02]"
                      : "border-zinc-100 bg-white hover:border-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-4 text-left">
                    <div
                      className={`p-3 rounded-xl transition-colors ${paymentMethod === m.id ? "bg-zinc-950 text-white" : "bg-zinc-50 text-zinc-400"}`}
                    >
                      <m.icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <span
                        className={`block font-black text-[11px] uppercase tracking-widest ${paymentMethod === m.id ? "text-zinc-950" : "text-zinc-600"}`}
                      >
                        {m.label}
                      </span>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-tight">
                        {m.desc}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === m.id ? "border-blue-600 bg-blue-600" : "border-zinc-200"}`}
                  >
                    {paymentMethod === m.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 p-5 bg-white border border-zinc-100 rounded-2xl shadow-sm">
              <ShieldCheck size={20} className="text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 leading-tight">
                Your payment data is processed securely via AES-256 protocols.
              </span>
            </div>
          </div>

          {/* RIGHT: DYNAMIC FORMS (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 border border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.04)] min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {paymentMethod === "card" && (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest ml-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 focus:bg-white rounded-2xl font-black text-sm outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest ml-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="w-full p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 focus:bg-white rounded-2xl font-black text-sm outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-zinc-400 tracking-widest ml-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          placeholder="***"
                          className="w-full p-5 bg-zinc-50 border border-zinc-100 focus:border-zinc-950 focus:bg-white rounded-2xl font-black text-sm outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-6 bg-zinc-950 text-white rounded-2xl font-[1000] uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 group">
                    Authorize Payment
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </button>
                </motion.div>
              )}

              {paymentMethod === "upi" && (
                <motion.div
                  key="upi"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center space-y-8 py-4"
                >
                  <div className="w-40 h-40 bg-zinc-50 rounded-[2.5rem] border-2 border-dashed border-zinc-200 flex items-center justify-center mx-auto">
                    <Smartphone size={48} className="text-zinc-200" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      Unified Interface
                    </h3>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                      Awaiting Secure Link...
                    </p>
                  </div>
                  <button className="px-10 py-4 border-2 border-zinc-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-950 hover:text-white transition-all">
                    Manual UPI ID
                  </button>
                </motion.div>
              )}

              {paymentMethod === "cod" && (
                <motion.div
                  key="cod"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center space-y-8 py-4"
                >
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto border border-emerald-100">
                    <Banknote size={44} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">
                      Doorstep Handover
                    </h3>
                    <p className="text-zinc-500 text-[11px] font-medium max-w-[280px] mx-auto leading-relaxed">
                      Pay via Cash or QR code when your Vantage parcel arrives.
                      Secure & Trusted.
                    </p>
                  </div>
                  <button className="w-full py-6 bg-zinc-950 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:bg-emerald-600 transition-all">
                    Confirm Order
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-zinc-50 flex justify-between grayscale opacity-30">
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                PCI-DSS Compliant
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.2em]">
                AES-256 SECURE
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
