import PropTypes from "prop-types";
import config from "@config";

function Contact() {

  return (
    <main>

      {/* RESTAURANT INFO */}
      <section className="pt-10">
        <div className="flex items-center justify-center p-5">
          <ul>
            <li className="font-sans font-extrabold tracking-widest pb-4 text-2xl lg:text-5xl text-center uppercase">
              {config.name}
            </li>
            <li className="font-sans font-extrabold tracking-widest pb-4 text-2xl lg:text-3xl text-center uppercase">
              {config.subtitle}
            </li>
            <li className="font-sans font-extrabold tracking-wide pb-4 text-2xl lg:text-3xl text-center">
              {config.contact.address[0]}
            </li>
            <li className="font-sans font-extrabold tracking-wide pb-4 text-2xl lg:text-3xl text-center">
            {config.contact.telephones[0]}
            </li>
            <li className="font-sans font-extrabold tracking-wide pb-4 text-2xl lg:text-3xl text-center">
            {config.contact.email[0]}
            </li>
          </ul>
        </div>
      </section>

      {/* PHOTO + CONTENT SECTION */}
      <section className="pt-20">
        <div className="flex flex-wrap md:flex-nowrap w-full p-5">
          <div className="flex flex-col p-5 items-center text-center justify-center w-full lg:w-1/2">
            <h2 className="text-4xl tracking-widest uppercase pb-5">
              Only GOOD vibes
            </h2>
            <p className="text-2xl mb-12 text-center">
              Reach it with la la la bicileta, a lot of parking spots available
            </p>
          </div>
          <div className="flex items-center justify-center p-5 mx-auto w-full lg:w-1/2">
            <img
              alt="Menu Link Image"
              className="object-fill"
              src="assets/img/contact_page_img.jpg"
            />
          </div>
        </div>
      </section>

      {/* SEE YOU SOON SECTION */}
      <div className="flex w-full h-64 items-center justify-center">
        <p className="text-5xl">See you soon</p>
      </div>

    </main>
  );
}

Contact.propTypes = {
  config: PropTypes.object
}

export default Contact;
