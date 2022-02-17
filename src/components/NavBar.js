import React from "react";
import styled from "styled-components";
import userPic from "../images/PpDany.jpg";
import backIcon from "../images/icon-back-black.svg";

export default function NavBar() {
  return (
    <Wrapper>
      <Back src={backIcon} alt="go-back"></Back>
      <Title>Profile</Title>
      <Image src={userPic} alt="profile-image"></Image>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 16px;
  /* background-color: #0c7b8a; */
  display: grid;
  grid-template-columns: 60px auto 60px;
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 0;
  border-bottom: 2px solid #c7c7c7;
`;

const Back = styled.img`
  width: 30px;
  margin: auto;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  @media only screen and (max-width: 450px) {
    font-size: 34px;
  }
`;

const Image = styled.img`
  width: 60px;
  border-radius: 50%;
`;
