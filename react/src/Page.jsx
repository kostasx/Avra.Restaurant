import PropTypes from "prop-types";
import Config from "../config.yaml";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Page({ element }){
  return (
    <>
      <Header config={Config} />
      <Container>
        { element }
      </Container>
      <Footer config={Config} />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  element: PropTypes.node
};
