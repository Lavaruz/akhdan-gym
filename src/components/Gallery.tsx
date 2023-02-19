export default function Gallery() {
  return (
    <div className="container mb-10">
      <h2 className="text-2xl font-bold mb-10 text-slate-900 tracking-wide">
        GALLERY
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="rounded-lg overflow-hidden group shadow-md hover:shadow-lg hover:scale-[.98] transition duration-300 ease-in-out object-cover">
          <img
            src="/imgs/1.jpg"
            alt=""
            className="group-hover:scale-110 transition duration-300 ease-in-out object-cover w-full h-full"
          />
        </div>
        <div className="rounded-lg overflow-hidden group shadow-md hover:shadow-lg hover:scale-[.98] transition duration-300 ease-in-out">
          <img
            src="/imgs/2.jpg"
            alt=""
            className="group-hover:scale-110 transition duration-300 ease-in-out object-cover w-full h-full"
          />
        </div>
        <div className="rounded-lg overflow-hidden group shadow-md hover:shadow-lg hover:scale-[.98] transition duration-300 ease-in-out">
          <img
            src="/imgs/3.jpg"
            alt=""
            className="group-hover:scale-110 transition duration-300 ease-in-out object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
