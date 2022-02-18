import React, {useRef, useState} from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import userPic from "../images/PpDany.jpg";
import ToggleSwitchGender from "./ToggleSwitchGender";

export default function UserDataForm(props) {
  const {userData} = props;
  console.log(userData);
  //   const {userData, callback} = props;
  const [postResult, setPostResult] = useState({});
  //   const toggleState = useRef(null);
  const postURL = "https://httpbin.org/post";
  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const update_first_name = useInput("");
  const update_last_name = useInput("");
  const update_city = useInput("");
  const update_state = useInput("");
  const update_country = useInput("");
  const update_postcode = useInput("");
  const update_email = useInput("");
  const update_phone = useInput("");
  const update_gender = useInput("");

  async function postData() {
    console.log("trying...");
    const postData = {
      first_name: `${update_first_name.value !== "" ? update_first_name.value : userData.firstName}`,
      last_name: `${update_last_name.value !== "" ? update_last_name.value : userData.lastName}`,
      city: `${update_city.value !== "" ? update_city.value : userData.city}`,
      state: `${update_state.value !== "" ? update_state.value : userData.state}`,
      country: `${update_country.value !== "" ? update_country.value : userData.country}`,
      postcode: `${update_postcode.value !== "" ? update_postcode.value : userData.postcode}`,
      email: `${update_email.value !== "" ? update_email.value : userData.email}`,
      phone: `${update_phone.value !== "" ? update_phone.value : userData.phone}`,
      gender: `${update_gender.value !== "" ? update_gender.value : userData.gender}`,
    };
    console.log(postData);
    console.log(JSON.stringify(postData));
    try {
      const res = await fetch(`${postURL}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `Error during POST: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      setPostResult(formatResponse(result));
    } catch (error) {
      setPostResult(error.message);
    }
  }

  const clearPostOutput = () => {
    setPostResult(null);
  };

  const submitForm = (event) => {
    event.preventDefault();

    console.log("testing...");
    postData();
    // console.log({postResult});
    // callback(event.target.postResult);
  };

  //   const checkToggle = (event) => {
  //     console.log("current toggle is: ", toggleState);
  //   };

  return (
    <DataWrapper onSubmit={submitForm} id="profile-form">
      <Info
        onChange={() => {
          update_last_name.onChange();
          submitForm();
        }}
        onChange={submitForm}
        placeholder={userData.firstName || "Jane"}
      ></Info>
      <Info onChange={submitForm} placeholder={userData.lastName || "Doe"} {...update_last_name}></Info>
      <Info onChange={submitForm} placeholder={userData.city || "Dallas"} {...update_city}></Info>
      <Info onChange={submitForm} placeholder={userData.state || "Texas"} {...update_state}></Info>
      <Info onChange={submitForm} placeholder={userData.country || "USA"} {...update_country}></Info>
      <Info onChange={submitForm} placeholder={userData.postcode || "55123"} {...update_postcode}></Info>
      <Info onChange={submitForm} placeholder={userData.email || "j.doe@test.com"} {...update_email}></Info>
      <Info onChange={submitForm} placeholder={userData.phone} {...update_phone}></Info>
      <ProfileImage src={(userData && userData.image) || {userPic}} alt="profile-image"></ProfileImage>
      <ToggleSwitchGender />
      {/* <ToggleSwitchGender ref={toggleState} onChange={checkToggle} /> */}
    </DataWrapper>
  );
}

const DataWrapper = styled.form`
  display: grid;
  align-items: end;
  justify-items: right;
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
