import Config from "../config.yaml";
import PropTypes from "prop-types";

function OpeningHours({ entries }) {
  return (
    <>
      <div className="text-center my-10">
        <h2 className="font-sans font-bold text-3xl pb-6 uppercase tracking-wide">
          Opening Hours :{" "}
        </h2>
        <div className="flex items-center justify-evenly text-center">
          {entries.map((entry) => {
            return (
              <div key={entry.day}>
                <p className="font-sans font-bold text-2xl pb-2">{entry.day}</p>
                <p className="text-xl">{entry.hours}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="h-32" src="assets/img/Capturepicpic.png" />
      </div>
    </>
  );
}

OpeningHours.propTypes = {
  entries: PropTypes.array,
};

function Reservations() {

  const { telephones, emails, info  } = Config.reservations;
  const infoArray = info.split("\n").filter(Boolean);
  console.log({ infoArray });

  return (
    <section className="py-20">

      <div className="text-center">
        <h2 className="font-sans font-bold text-3xl pb-6 uppercase tracking-wide">
          Reservations:
        </h2>
        {telephones.map( tel =>{
          return (
            <p className="text-3xl pb-4" key={tel}>{tel}</p>
          )
        })}
        {emails.map( email =>{
          return (
            <p className="text-3xl pb-4" key={email}>{email}</p>
          )
        })}
        {Config.reservations.info}
        <h2 className="font-sans font-bold text-3xl pt-6 pb-6 uppercase tracking-wide">
          House rules:
        </h2>
        {infoArray.map( p =>{
          return (
            <p key={p} className="text-xl pb-2">
              {p}
            </p>
          )          
        })}
      </div>

      <OpeningHours entries={Config.opening_hours} />
    </section>
  );
}

export default Reservations;
