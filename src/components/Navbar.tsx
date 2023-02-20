export default function Navbar() {
  return (
    <div className="navbar w-full absolute top-0 left-0 z-10">
      <div className="container py-5">
        <div className="flex justify-between">
          <div className="nav-brand">
            <h3 className="text-lg font-bold text-slate-100">akhdan fitness</h3>
          </div>
          <div className="nav-login">
            <a
              href=""
              className="px-7 py-2 bg-transparent border border-slate-200 rounded text-slate-100 font-bold
              hover:bg-slate-100 hover:text-dark transition duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
