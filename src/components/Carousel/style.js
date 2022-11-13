import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  position: relative;
  height: 571px;
  border: 1px solid red;
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 17px;
  border-radius: 50%;
  transform: ${({left})=> (left? 'rotate(-90deg)' : 'rotate(90deg)')};
  left: ${({left})=> (!left && '20px')};
  right: ${({left})=> (left && '20px')};
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  :hover{
    opacity: 0.6;
  }
`;

export { Container, Arrow };
