import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 4,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,
};

export const Category = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

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
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
