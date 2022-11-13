import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      icon,
      onChange,
      value,
      defaultValue,
      placeholder,
      name,
      width,
      height,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
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
  }
);

export default Input;
