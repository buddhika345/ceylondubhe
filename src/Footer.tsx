const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Ceylon Dubhe (Pvt) Ltd. All rights reserved.
        <span className="block mt-1">
          Website designed & developed by{" "}
          <span className="text-orange-400 font-medium">EWebinez</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
