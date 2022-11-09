import React from "react";
import { Input, Button } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { Dropdown } from "antd";

export const Filter = () => {
  const menu = (
    <MenuWrapper>
        <h1 className="subTitle">Address</h1>
      <Section>
        <Input placeholder={'Country'} />
        <Input placeholder={'Region'} />
        <Input placeholder={'City'} />
        <Input placeholder={'Zip Code'} />
      </Section>
        <h1 className="subTitle">Apartnment Info</h1>
      <Section>
      <Input placeholder={'Rooms'} />
      <Input placeholder={'Size'} />
      <Input placeholder={'Sort'} />
      </Section>
        <h1 className="subTitle">Price</h1>
      <Section>
      <Input placeholder={'Min price'} />
      <Input placeholder={'Max price'} />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter and address, neighborhood, city, or ZIP code"}
      />

      <Dropdown
        overlay={menu}
        arrow={{ pointAtCenter: true }}
        placement="bottomRight"
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
