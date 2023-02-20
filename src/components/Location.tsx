export default function Location() {
  return (
    <div className="bg-slate-900">
      <div className="container py-14">
        <h1 className="text-2xl font-bold text-slate-100 mb-8 tracking-wide">
          LOKASI GYM
        </h1>
        <div className="">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.google.co.id/maps/place/Akhdan+Fitness+Center+%26+Aerobic+%26+penyewaan+ruang+dance,+tari+dll/@-6.4565299,106.7951235,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e9e6ffcac5e7:0x8554ff72ea203fbd!8m2!3d-6.4565352!4d106.7973122!16s%2Fg%2F11cm02t5pz"
            className="text-slate-100 mb-5 block hover:text-sky-400"
          >
            Jl Komp Departemen Agama Ri No.57, Pabuaran, Kecamatan Bojonggede,
            Kabupaten Bogor, Jawa Barat 16921
          </a>
          <iframe
            className="rounded-lg overflow-hidden shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.512724666522!2d106.79512351414002!3d-6.45652986492699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e9e6ffcac5e7%3A0x8554ff72ea203fbd!2sAkhdan%20Fitness%20Center%20%26%20Aerobic%20%26%20penyewaan%20ruang%20dance%2C%20tari%20dll!5e0!3m2!1sid!2sid!4v1676817844065!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
