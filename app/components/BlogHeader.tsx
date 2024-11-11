import { Link } from "@remix-run/react";
import ThemeToggle from "./ThemeToggle";

export default function BlogHeader() {
  return (
    <header className="relative mb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/40 to-primary-700/40 backdrop-blur-sm" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary-800/10 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24">
        <nav className="mb-16 flex items-center justify-between">
          <Link 
            to="/"
            className="text-sm font-medium text-white hover:text-white/90"
          >
            ← Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white">Blog</h1>
          <p className="mt-2 text-xl text-white/90">
            Thoughts on AI, web development, and content creation
          </p>
        </div>
      </div>
    </header>
  );
}