import PropTypes from "prop-types";
// import React from 'react';
// import config from "@config";

export default function Container({ children }) {
  
  return (
    <main className="container mx-auto">
      {/* {React.cloneElement(children, { config })} */}
      { children }
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object
};
