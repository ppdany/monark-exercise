import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import UserDataForm from "./UserDataForm";

export default function ProfileCard() {
  const [userData, setUserData] = useState({});
  //   const [postResults, setPostResults] = useState({});
  //   const toggleState = useRef(null);

  const url = "https://randomuser.me/api";
  const fetchUserData = async () => {
    try {
      console.log("fetching user");
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

  useEffect(() => {
    fetchUserData();
  }, []);

  //   const checkToggle = (event) => {
  //     console.log("current toggle is: ", toggleState);
  //   };

  //   const showPOSTResults = (postResults) => {
  //     setPostResults(postResults);
  //   };

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
        <UserDataForm userData={userData} />
        {/* <UserDataForm userData={userData} callback={showPOSTResults} /> */}
        {/* <PostResults>{JSON.stringify(postResults)}</PostResults> */}
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

  :hover {
    color: black;
    cursor: pointer;
  }
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

const Title = styled.h2`
  display: grid;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #0c7b8a;
  padding: 16px 0;
`;

const PostResults = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  padding: 16px 0;
`;
