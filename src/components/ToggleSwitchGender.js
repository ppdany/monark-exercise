import React, {useState} from "react";
import styled from "styled-components";

export default function ToggleSwitchGender({checked = false, color = "#DE7058", onChange}) {
  const [toggle, setToggle] = useState(checked);

  return (
    <Wrapper onChange={onChange}>
      <Label>{toggle ? "Female" : "Male"}</Label>
      <Switch type="submit">
        <Input {...{color}} type="checkbox" defaultChecked={toggle} />
        <Slider {...{toggle, color}} onClick={() => setToggle(!toggle)} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 16px;
  justify-items: end;
  align-items: center;
  width: 100%;
`;

const Label = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  color: black;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({toggle, color}) => (toggle ? color : "#0C7B8A")};
  border-radius: 45px;
  transition: 0.3s;

  &:before {
    content: "";

    position: absolute;
    left: 2px;
    bottom: 2px;

    width: 44px;
    height: 44px;
    border-radius: 100%;

    background-color: #ffc74b;

    transition: 0.3s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(32px);
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 48px;
  background-color: ${({toggle, color}) => (toggle ? color : "#0C7B8A")};
  border-radius: 55px;
  transition: 0.4s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
