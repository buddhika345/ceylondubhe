import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="text-center px-6">
        <h1 className="text-7xl font-extrabold text-orange-500">404</h1>
        <p className="mt-4 text-lg text-slate-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 rounded-full border border-orange-400/80
                     bg-gradient-to-r from-orange-500 via-white to-orange-400
                     px-6 py-2 text-sm font-semibold uppercase tracking-wider
                     text-black shadow-[0_0_25px_rgba(251,146,60,0.6)]
                     hover:scale-105 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
