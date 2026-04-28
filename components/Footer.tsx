"use client";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  CreditCard,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-1">
        {/* --- Phase 1: Trust Signals (The eCommerce Must-Haves) --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-zinc-800">
          {[
            {
              icon: <Truck />,
              title: "Fast Delivery",
              desc: "Across India in 3-5 days",
            },
            {
              icon: <RotateCcw />,
              title: "7 Days Return",
              desc: "Hassle-free exchange",
            },
            {
              icon: <ShieldCheck />,
              title: "Secure Payment",
              desc: "100% Protected transactions",
            },
            {
              icon: <CreditCard />,
              title: "EMI Options",
              desc: "No cost EMI available",
            },
          ].map((feature, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="text-blue-500">{feature.icon}</div>
              <div>
                <h4 className="text-white text-sm font-bold">
                  {feature.title}
                </h4>
                <p className="text-[11px] text-zinc-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Phase 2: Links Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Brand & Newsletter (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/">
              <h2 className="text-3xl font-black tracking-tighter text-white">
                VANTAGE<span className="text-blue-500">.</span>
              </h2>
            </Link>
            <div className="max-w-md space-y-6">
              <p className="text-sm leading-relaxed">
                Experience the next generation of lifestyle commerce. From tech
                to fashion, we bring the best of the world to your doorstep.
              </p>
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                  Subscribe for Early Access
                </h4>
                <div className="flex bg-zinc-900 rounded-full p-1 border border-zinc-800 focus-within:border-blue-500 transition-all">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-6 py-2 text-sm w-full outline-none text-white"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Links Sections (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Shop
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Support
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Connect
              </h4>

              <div className="flex gap-4">
                {/* Instagram */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-[#E4405F] hover:text-white transition-all"
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>

                {/* Twitter (X) */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all"
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

                {/* Youtube */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-[#FF0000] hover:text-white transition-all"
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
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 58.38 58.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 58.38 58.38 0 0 1-15 0 2 2 0 0 1-2-2z" />
                    <path d="m10 15 5-3-5-3z" />
                  </svg>
                </Link>

                {/* Facebook */}
                <Link
                  href="#"
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-[#1877F2] hover:text-white transition-all"
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
              <div className="pt-4 space-y-2">
                <p className="text-[10px] uppercase font-bold text-zinc-500">
                  Language
                </p>
                <div className="flex items-center gap-2 text-xs text-white bg-zinc-900 w-fit px-3 py-1.5 rounded border border-zinc-800">
                  <Globe size={14} /> English (IN)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Phase 3: Bottom Bar --- */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-medium tracking-wide">
            © {currentYear} VANTAGE eCommerce. Built by{" "}
            <span className="text-white">Jitendra Suthar</span>
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              {/* Payment Icons Placeholder */}
              <div className="text-[10px] font-bold border border-zinc-700 px-2 py-0.5 rounded">
                VISA
              </div>
              <div className="text-[10px] font-bold border border-zinc-700 px-2 py-0.5 rounded">
                MASTERCARD
              </div>
              <div className="text-[10px] font-bold border border-zinc-700 px-2 py-0.5 rounded">
                UPI
              </div>
            </div>
            <div className="h-4 w-[1px] bg-zinc-800 hidden md:block" />
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-tighter">
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
