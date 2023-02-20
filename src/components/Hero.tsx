export default function Hero() {
  return (
    <div className="bg-hero-img h-screen w-full bg-cover bg-center lg:bg-[center_top_-4rem] relative">
      <div className="absolute left-0 top-0 bottom-0 right-0 bg-layer">
        <div className="container">
          <div className="flex flex-col items-center text-center w-3/4 mx-auto justify-center h-screen">
            <h1 className="font-bold text-3xl text-white mb-3">
              Akhdan Fitness Center & Aerobic
            </h1>
            <p className="text-white font-normal -text-lg mb-6 lg:w-1/2 lg:mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusantium velit quam incidunt odit hic.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6281288793904"
              className="text-slate-700 font-bold py-3 px-8 rounded-full bg-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
