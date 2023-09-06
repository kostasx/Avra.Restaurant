function Menu() {
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
        </div>
      </div>
    </section>
  );
}

export default Menu;
