export default function Footer() {
  return (
    <div className="footer text-slate-100 bg-slate-900 py-16 lg:py-32 w-full">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="footer-brand">
            <h1 className="font-bold text-xl lg:text-3xl ">
              Akhdan
              <br />
              Fitness
            </h1>
          </div>
          <div className="footer-media">
            <h3 className="text-lg font-bold">Social Media</h3>
            <div className="flex gap-4">
              <span>FB</span>
              <span>IG</span>
              <span>Twitter</span>
              <span>Maps</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
