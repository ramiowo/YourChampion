import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src="/imgs/Loading.png" alt="loadingImg"></img>
      <p>로딩중 . . .</p>
    </Container>
  );
};

export default Loading;
