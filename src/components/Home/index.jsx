import React from "react";
import GenCarousel from "../Carousel";
import Category from "../Category";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Category />
    </Container>
  );
};

export default Home;
