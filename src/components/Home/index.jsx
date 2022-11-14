import React from "react";
import GenCarousel from "../Carousel";
import HosueCard from "../HouseCard";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <HosueCard />
    </Container>
  );
};

export default Home;
