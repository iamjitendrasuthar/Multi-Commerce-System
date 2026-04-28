"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Lock,
  User,
  ArrowLeft,
  ShieldCheck,
  EyeOff,
  Eye,
  Smartphone,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email"); // email or phone

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-start sm:items-center justify-center p-4 font-sans overflow-hidden selection:bg-blue-500/30">
      {" "}
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>
      <motion.div
        layout
        className="w-full max-w-[400px] bg-zinc-900/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden relative z-10"
      >
        <div className="p-6 pt-10">
          {/* Site Name / Brand */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-[1000] tracking-tighter italic text-white leading-none">
              VANTAGE<span className="text-blue-600 not-italic">.</span>
            </h1>
            <p className="text-zinc-500 text-xs mt-3 font-medium">
              {isLogin
                ? "Welcome back! Please sign in."
                : "Join us to start your journey."}
            </p>
          </div>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative"
                >
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-base outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Login Method */}
            <div className="flex bg-white/5 p-1 rounded-xl mb-4 border border-white/5">
              <button
                onClick={() => setLoginMethod("email")}
                className={`cursor-pointer flex-1 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${loginMethod === "email" ? "bg-white text-black" : "text-zinc-500"}`}
              >
                Email
              </button>
              <button
                onClick={() => setLoginMethod("phone")}
                className={`cursor-pointer flex-1 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all ${loginMethod === "phone" ? "bg-white text-black" : "text-zinc-500"}`}
              >
                Phone
              </button>
            </div>

            <div className="relative">
              {loginMethod === "email" ? (
                <>
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-base outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
                  />
                </>
              ) : (
                <>
                  <Smartphone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-base outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600 font-mono tracking-widest"
                  />
                </>
              )}
            </div>

            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-12 text-base outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors cursor-pointer p-1"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={2.5} />
                ) : (
                  <Eye size={18} strokeWidth={2.5} />
                )}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end pr-1">
                <Link
                  href="/forgot-password"
                  className="text-[11px] font-medium text-zinc-500 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <button className="group relative w-full bg-white text-black rounded-2xl py-3.5 font-bold text-base overflow-hidden transition-all active:scale-[0.98] mt-4 cursor-pointer">
              <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight size={16} />
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              <span className="bg-[#0b0b0b] px-4 text-[9px]">
                One-Click Login
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group active:scale-95 cursor-pointer">
              <FcGoogle size={18} />
              <span className="text-xs font-semibold text-zinc-400 group-hover:text-white">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group active:scale-95 cursor-pointer">
              <FaFacebook size={18} className="text-[#1877F2]" />
              <span className="text-xs font-semibold text-zinc-400 group-hover:text-white">
                Facebook
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Toggle */}
        <div className="bg-white/[0.02] py-5 text-center border-t border-white/5">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs font-medium text-zinc-500 transition-colors cursor-pointer"
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span className="text-blue-500 font-bold ml-1">
              {isLogin ? "Register" : "Login"}
            </span>
          </button>
        </div>
      </motion.div>
      <Link
        href="/"
        className="hidden sm:flex absolute top-8 left-8 group items-center gap-3 px-4 py-2 rounded-full 
       bg-white/[0.03] border border-white/5 backdrop-blur-md
       text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/10
       transition-all duration-300 active:scale-95 z-20 cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300 ease-out"
          />
          <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-[11px] font-bold uppercase tracking-[0.15em]">
          Back <span className="hidden sm:inline">to Shop</span>
        </span>
      </Link>
    </div>
  );
}
