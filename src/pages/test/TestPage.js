import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Questions from "./data/Question";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 402px;
  height: 100vh;
  margin: 0 auto;
  padding: 80px 16px 40px 16px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const BackGroundBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const ProgressText = styled.div`
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
  color: #bdbdbd;
`;

const ImageOverlay = styled.div`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  background-image: url("/imgs/Timo.svg");
  background-size: cover;
  background-position: center;
  opacity: ${({ progress }) => progress};
  transition: opacity 0.3s ease-in-out;
`;

// const Progress = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;

//   .dot {
//     width: 20px;
//     height: 20px;
//     margin: 0 4px;
//     border-radius: 50%;
//     background-color: rgba(255, 255, 255, 0);

//     &.active {
//       width: 16px;
//       height: 16px;
//       background-color: transparent;
//       background-image: url("/imgs/ProgressImg.svg");
//       background-size: cover;
//       background-position: center;
//     }
//   }
// `;

const InnerWrap = styled.div`
  position: relative;
  z-index: 3;
  color: #fff;
  h2 {
    font-size: 22px;
    text-align: center;
    margin-bottom: 45px;
    line-height: 30px;
    word-break: keep-all;
  }
  .option {
    width: 100%;
    height: 80px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    cursor: pointer;
    .sub {
      font-size: 14px;
      color: #9b7f49;
      margin-bottom: 8px;
    }
    .answer {
      font-size: 18px;
      line-height: 22px;
      word-break: keep-all;
    }
  }
`;

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // 답변을 선택할 때 호출되는 함수
  const handleAnswer = (answerType) => {
    const newAnswers = [...answers, { type: answerType }];
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < Questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/result", { state: { answers: newAnswers } });
    }
  };

  const currentQuestion = Questions[currentQuestionIndex];
  const progress = Math.min(currentQuestionIndex / (Questions.length - 1), 1);

  return (
    <Container $backgroundImage={"/imgs/BackImg.jpg"}>
      <BackGroundBlur />
      <InnerWrap>
        <ImageOverlay progress={progress} />
        <ProgressText>
          {currentQuestionIndex + 1} / {Questions.length}
        </ProgressText>

        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, id) => (
          <div
            key={id}
            className="option"
            onClick={() => handleAnswer(option.type)}
          >
            <p className="sub">"{option.subtitle}"</p>
            <p className="answer">{option.answer}</p>
          </div>
        ))}
      </InnerWrap>
    </Container>
  );
};

export default TestPage;
