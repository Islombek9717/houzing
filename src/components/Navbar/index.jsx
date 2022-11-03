import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <Button>SignIn</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
