import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between; */
  
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: row;
  padding: var(--padding);
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

export { Container };
