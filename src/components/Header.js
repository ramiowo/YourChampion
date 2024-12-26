import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  width: 100%;
  max-width: 402px;
  height: 55px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const BackButton = styled.div`
  flex: 0;
  cursor: pointer;
`;
const Logo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>
        <IoIosArrowBack
          style={{ color: "rgba(255,255,255,0.8)", fontSize: "24px" }}
        />
      </BackButton>
      <Logo onClick={() => navigate("/")}>
        <img src={`${process.env.PUBLIC_URL}/imgs/Logo.svg`} alt="logo" />
      </Logo>
    </Container>
  );
};

export default Header;
