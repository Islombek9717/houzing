import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import CategoryCard from "../CategoryCard";
import { Container, Arrow, Img, Blur, Content } from "./style";
import Slider from "react-slick";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Category = () => {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  console.log(data);

  return (
    <Container>
      <Slider {...settings}>
        {data.map((value) => {
          return <CategoryCard key={value.id} />;
        })}
      </Slider>
    </Container>
  );
};

export default Category;
