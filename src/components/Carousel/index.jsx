import { Carousel } from "antd";
import React from "react";
import { useRef } from "react";
import { Container, Arrow, Img, Blur, Content } from "./style";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Apartment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250/month</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} left={'true'} />
      <Arrow onClick={onMove} data-name="right" name="right" />
    </Container>
  );
};

export default GenCarousel;
