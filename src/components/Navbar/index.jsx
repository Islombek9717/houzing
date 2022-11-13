import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Button from "../Generic/Button";
import { Container, Wrapper, Section,LogoName, Logo, Link, Main } from "./style";


export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo />
            <LogoName>Houzing</LogoName>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (!hidden &&  (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              )
              );
            })}
          </Section>
          <Section>
            <Button onClick={()=>navigate('/signin')} type='dark'>Sign In</Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
