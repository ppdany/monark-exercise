import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        <ProfileCard />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  /* background-color: #3a5965; */
  min-height: 100vh;
  max-width: 768px;
  color: black;
  border: black;
  border-width: 2px;
  border-color: 3px solid #c7c7c7 !important;
  position: relative;
  margin: 0 auto;
  background-color: white;
`;

const ContentWrapper = styled.div`
  padding: 70px 16px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto;
`;
