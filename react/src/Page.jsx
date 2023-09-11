import PropTypes from "prop-types";
import Container from "@components/Container";
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Page({ element, hero = true }){
  return (
    <>
      <Header hero={hero} />
      <Container>{ element }</Container>
      <Footer />
    </>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  element: PropTypes.node,
  hero: PropTypes.bool
};
