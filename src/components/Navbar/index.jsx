import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Wrapper, Section, Logo, Link } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("/home")} logo>
          <Logo />
          <h3>Houzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path}, index) => {
            return (
              <Link className={({isActive})=> isActive && 'active'} key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>SignIn</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
