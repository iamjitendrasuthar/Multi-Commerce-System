"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ArrowLeft, KeyRound } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-start sm:items-center justify-center p-4 font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[400px] bg-zinc-900/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="mb-4 w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/30">
            <KeyRound size={24} className="text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Lost Access<span className="text-blue-500">?</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
            />
          </div>

          <button className="group relative w-full bg-white text-black rounded-2xl py-4 font-bold text-sm overflow-hidden transition-all active:scale-[0.98] mt-2 cursor-pointer">
            <div className="absolute inset-0 bg-blue-600 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
              Send Reset Link
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link
            href="/login"
            className="text-xs font-medium text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={14} /> Back to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
