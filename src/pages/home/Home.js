import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 402px;
  height: 100vh;
  margin: 0 auto;
  background-image: url(/imgs/BackImg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Title = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  h4 {
    position: relative;
    margin-top: 40px;
    font-size: 14px;
    opacity: 0.8;
    img {
      position: absolute;
      top: -38px;
      left: 136px;
    }
  }
  h2 {
    margin-top: 16px;
    font-size: 48px;
  }
`;

const StartBtn = styled.div`
  /* margin-top: 260px; */
  width: 260px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  line-height: 60px;
  a {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Home = () => {
  return (
    <Container>
      <Title>
        <h4>
          내가 만약 롤 챔피언이 된다면?
          <img src="/imgs/HomeStar.png" alt="homestar"></img>
        </h4>
        <h2>너의 챔피언은.</h2>
      </Title>
      <StartBtn>
        <Link to={"/test"}>나의 챔피언 만나러가기</Link>
      </StartBtn>
    </Container>
  );
};

export default Home;
