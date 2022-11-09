import React from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = ({
  type,
  icon,
  onChange,
  value,
  defaultValue,
  placeholder,
  name,
  width,
  height,
}) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
        icon={icon}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
      />
    </Wrapper>
  );
};

export default Input;
