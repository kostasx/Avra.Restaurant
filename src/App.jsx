import "./App.css";
import ContactDetails from "@components/ContactDetails"

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
