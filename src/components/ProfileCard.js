import React, {useEffect, useState} from "react";
import styled from "styled-components";
import userPic from "../images/PpDany.jpg";

export default function ProfileCard() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const url = "https://randomuser.me/api";
    const fetchUserData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const data = jsonData.results[0];

        const {
          name: {first, last},
          location: {city, state, country, postcode},
          email,
          phone,
          picture: {medium: image},
          gender,
        } = data;

        const person = {
          firstName: `${first}`,
          lastName: `${last}`,
          city,
          state,
          country,
          postcode,
          email,
          phone,
          image,
          gender,
        };
        setUserData(person);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserData();
  }, []);

  //   console.log(userData);
  return (
    <Wrapper>
      <EditBtn>Edit</EditBtn>
      <ProfileWrapper>
        <TitlesWrapper>
          <Title>First Name</Title>
          <Title>Last Name</Title>
          <Title>City</Title>
          <Title>State</Title>
          <Title>Country</Title>
          <Title>Postcode</Title>
          <Title>Email</Title>
          <Title>Phone</Title>
          <Title>Profile image</Title>
          <Title>Gender</Title>
        </TitlesWrapper>
        <DataWrapper>
          {/* <Info placeholder="Jane"></Info> */}
          <Info placeholder={userData.firstName}></Info>
          {/* <Info placeholder="Doe"></Info> */}
          <Info placeholder={userData.lastName}></Info>
          {/* <Info placeholder="Dallas"></Info> */}
          <Info placeholder={userData.city}></Info>
          {/* <Info placeholder="Texas"></Info> */}
          <Info placeholder={userData.state}></Info>
          {/* <Info placeholder="USA"></Info> */}
          <Info placeholder={userData.country}></Info>
          {/* <Info placeholder="55123"></Info> */}
          <Info placeholder={userData.postcode}></Info>
          {/* <Info placeholder="j.doe@test.com"></Info> */}
          <Info placeholder={userData.email}></Info>
          {/* <Info placeholder="+112345678990"></Info> */}
          <Info placeholder={userData.phone}></Info>
          <ProfileImage src={(userData && userData.image) || {userPic}} alt="profile-image"></ProfileImage>
          <Toggle></Toggle>
        </DataWrapper>
      </ProfileWrapper>
    </Wrapper>
  );
}

const EditBtn = styled.button`
  background: none;
  border: none;
  color: #7f7f7f;
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  width: 100px;
  padding: 16px 0px;
`;

const Toggle = styled.button`
  border: none;
  border-radius: 30px;
  width: 50px;
  height: 30px;
  background: #32d74b;
`;

const Wrapper = styled.div`
  padding: 100px 0;
  display: grid;
  grid-template-columns: auto;
  margin: 0;
`;

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const TitlesWrapper = styled.div`
  display: grid;
  align-items: initial;
  justify-items: left;
`;

const DataWrapper = styled.div`
  display: grid;
  align-items: end;
  justify-items: right;
`;

const Title = styled.h2`
  display: grid;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #0c7b8a;
  padding: 16px 0;
`;

const Info = styled.input`
  display: grid;
  align-items: center;
  width: 90%;
  border: none;
  border-bottom: 2px solid #c7c7c7;
  padding: 6px;
  text-align: right;
  font-size: 24px;
  font-weight: 700;
  text-align: right;
  color: #101010;

  :focus {
    outline: none;
  }
`;

const ProfileImage = styled.img`
  width: 50px;
  border-radius: 50%;
`;
