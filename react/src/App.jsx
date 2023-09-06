import "./App.css";

function Discover() {
  return (
    <section className="py-20">
      <div className="flex flex-wrap md:flex-nowrap p-5">
        <div className="flex items-center justify-center p-5 mx-auto w-full lg:w-1/2">
          <img
            alt="Menu Link Image"
            className="object-fill"
            src="assets/img/meniu.png"
          />
        </div>
        <div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
          <h2 className="text-4xl tracking-widest uppercase pb-5" data-scroll>
            Discover our menu
          </h2>
          <p className="text-2xl mb-12 p-5" data-scroll>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            iaculis lectus. In lobortis tortor eget venenatis ultrices. Fusce
            rhoncus tincidunt purus et egestas. Maecenas erat nisl, porta nec.
          </p>
          <button className="px-3 py-4">
            <a
              className="px-3 py-4 bg-black text-white font-sans uppercase tracking-widest border hover:text-black hover:bg-white hover:border-black transition duration-300"
              href="meniu.html"
            >
              Go to menu
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

function Grid() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y-0">
        <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
          <img className="h-64 m-5" src="assets/img/rezervari.png" />
          <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">
            Events
          </h2>
          <div className="px-20 text-center">
            <p>
              {" "}
              Maecenas erat nisl, porta nec fringilla in, tincidunt eget sem.
              Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum
              rhoncus ipsum, in porta lectus viverra eget
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
          <img className="h-64 m-5" src="assets/img/rezervari.png" />
          <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">
            About us
          </h2>
          <div className="px-20 text-center">
            <p>
              {" "}
              Maecenas erat nisl, porta nec fringilla in, tincidunt eget sem.
              Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum
              rhoncus ipsum, in porta lectus viverra eget
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
          <img className="h-64 m-5" src="assets/img/rezervari.png" />
          <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">
            Specials
          </h2>
          <div className="px-20 text-center">
            <p>
              {" "}
              Maecenas erat nisl, porta nec fringilla in, tincidunt eget sem.
              Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum
              rhoncus ipsum, in porta lectus viverra eget
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4 lg:mb-0">
          <img className="h-64 m-5" src="assets/img/rezervari.png" />
          <h2 className="font-sans text-3xl tracking-widest uppercase mb-2">
            Gallery
          </h2>
          <div className="px-20 text-center">
            <p>
              {" "}
              Maecenas erat nisl, porta nec fringilla in, tincidunt eget sem.
              Nunc in magna vitae lectus ultrices vestibulum. Maecenas rutrum
              rhoncus ipsum, in porta lectus viverra eget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetails() {
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.740807941523!2d20.562711475877467!3d38.65483967177683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135db15907124da1%3A0xe58fdadd01991f7f!2sAvra%20greek%20cuisine%20%26%20more!5e0!3m2!1sen!2sgr!4v1693769617052!5m2!1sen!2sgr"
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

function Column() {
  return (
    <section className="py-20">
      <div className="flex flex-wrap md:flex-nowrap w-full p-5">
        <div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
          <h2 className="text-4xl tracking-widest uppercase pb-5">
            Only GOOD vibes
          </h2>
          <p className="text-2xl mb-12 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
            iaculis lectus. In lobortis tortor eget venenatis ultrices. Fusce
            rhoncus tincidunt purus et egestas. Maecenas erat nisl, porta nec.
          </p>
        </div>
        <div className="flex items-center justify-center p-5 mx-auto w-full lg:w-1/2">
          <img
            alt="Menu Link Image"
            className="object-fill"
            src="assets/img/good_vibes.jpg"
          />
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Discover />
      <Grid />
      <Column />
      <ContactDetails />
    </>
  );
}

export default App;
