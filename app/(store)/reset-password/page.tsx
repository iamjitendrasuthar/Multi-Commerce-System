"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[400px] bg-zinc-900/40 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 p-8 relative z-10"
      >
        <div className="text-center mb-8">
          <div className="mb-4 w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto border border-green-500/20">
            <ShieldCheck size={24} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            New Credentials<span className="text-blue-500">.</span>
          </h2>
          <p className="text-zinc-500 text-sm mt-2">
            Choose a strong password to secure your identity.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              size={18}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-blue-500/50 transition-all text-white placeholder:text-zinc-600"
            />
          </div>

          {/* Password Strength Requirement Hint */}
          <div className="px-2 py-1">
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              <CheckCircle2 size={12} className="text-blue-500" /> Min. 8
              characters required
            </div>
          </div>

          <button className="group relative w-full bg-blue-600 text-white rounded-2xl py-4 font-bold text-sm overflow-hidden transition-all active:scale-[0.98] mt-2 cursor-pointer shadow-lg shadow-blue-900/20">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Update Password
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
