import PropTypes from "prop-types";

export default function Container({ children }) {
  return <main className="container mx-auto">{children}</main>;
}

Container.propTypes = {
  children: PropTypes.node,
};
