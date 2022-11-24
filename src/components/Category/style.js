import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 96px 130px;
  margin: auto;
  max-width: 1440px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffff;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export { Container, Content };
