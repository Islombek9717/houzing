import React, { useEffect, useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section, SelectAnt } from "./style";
import { Dropdown } from "antd";
import { useRef } from "react";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minRef = useRef();
  const maxRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };


  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);


  const onChangeCategory = (category_id) => {
    console.log(category_id);
    navigate(`/properties/${uzeReplace('category_id', category_id)}`);
  }

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("country")}
          ref={countryRef}
          name="country"
          placeholder={"Country"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          ref={regionRef}
          name="region"
          placeholder={"Region"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("city")}
          ref={cityRef}
          name="address"
          placeholder={"City"}
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          ref={zipRef}
          name="zip_code"
          placeholder={"Zip Code"}
        />
      </Section>
      <h1 className="subTitle">Apartnment Info</h1>
      <Section>
        <Input ref={roomsRef} placeholder={"Rooms"} />
        <Input ref={sortRef} placeholder={"Sort"} />
        {/* <Input ref={sizeRef} placeholder={"Size"} /> */}
        <SelectAnt defaultValue='Category'  labelInValue onChange={onChangeCategory}>
          {data.map((value) => {
            return <SelectAnt.Option value={value.id}>{value.name}</SelectAnt.Option>
          })}
        </SelectAnt>
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minRef} placeholder={"Min price"} />
        <Input ref={maxRef} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );

  // console.log(useReplace('address', 'Toshkent'));

  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter and address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger="click"
      >
        <div>
          <Button type={"light"}>
            <Icons.Setting />
            Advanced
          </Button>
        </div>
      </Dropdown>

      <Button>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
