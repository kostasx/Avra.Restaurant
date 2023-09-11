import Config from "../../config.yaml";

export default function ContactDetails() {

  return (
    <section
      className="my-20 bg-fixed bg-center object-contain overflow-x-visible w-full"
      style={{ backgroundImage: "url('assets/img/sunset.jpg')" }}
    >
      <div className="container px-4 mx-auto">
        <div className="pt-20 pb-24 px-8 md:px-16 rounded">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full lg:w-1/2 px-8 flex">
              <div className="my-auto">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white uppercase">
                  Pay us a visit :
                </h2>
                <p className="mt-2 leading-loose font-sans uppercase tracking-wide font-bold text-white">
                  Avra, Greek Cuisine & More
                </p>
                <p className="mt-2 mb-6 leading-loose text-white">
                  Egremni Rd, Lefkada 310 82, GR
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-white uppercase">
                  Call us :
                </h2>
                <p className="mt-2 mb-6 leading-loose text-white">
                  +30 2645 033307
                </p>
                <a
                  className="inline-block py-4 px-8 text-xs border bg-black text-white uppercase tracking-widest font-semibold leading-none hover:bg-white hover:border-white hover:text-black rounded-none transition duration-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.e-restaurants.gr/en/estiatorio/avra-lefkada"
                >
                  Reservations
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-8 mt-12 lg:mt-0">
              <div className="embed-responsive aspect-ratio-4/3">
                {/* <!-- 38.65496531962637, 20.565286404346732 --> */}
                <iframe
                  src={Config.contact.map.google_map_embed_url}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* <!-- <iframe allowFullScreen=""
                  aria-hidden="false" className="embed-responsive-item" frameborder="0" height="450"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10868.916974462507!2d22.09788090472412!3d47.0749679541605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4570e157c679cb5!2sPicnic%20Bistro!5e0!3m2!1sfr!2sfr!4v1610973279353!5m2!1sfr!2sfr"
                  style="border:0;" tabindex="0" width="600"></iframe>
          "></iframe> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}