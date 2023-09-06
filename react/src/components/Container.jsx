import PropTypes from "prop-types";
import React from 'react';

export default function Container({ children, config }) {
  
  return (
    <main className="container mx-auto">
      {React.cloneElement(children, { config })}
      {/* { children } */}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  config: PropTypes.object
};
