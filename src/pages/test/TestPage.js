import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router를 사용하여 페이지 이동
import Questions from "./data/Question";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 402px;
  height: 100vh;
  margin: 0 auto;
  padding: 80px 16px 40px 16px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const TestPage = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 hook
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // 답변을 선택할 때 호출되는 함수
  const handleAnswer = (answerType) => {
    const newAnswers = [...answers, { type: answerType }];
    setAnswers(newAnswers);

    if (currentQuestionIndex + 1 < Questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 모든 질문을 마쳤을 때 결과 페이지로 이동
      navigate("/result", { state: { answers: newAnswers } });
    }
  };

  const currentQuestion = Questions[currentQuestionIndex];

  return (
    <Container backgroundImage={"/imgs/BackImg.jpg"}>
      <div className="question-container">
        <h2>{currentQuestion.question}</h2>
        {currentQuestion.options.map((option, index) => (
          <div
            key={index}
            className="answer-option"
            onClick={() => handleAnswer(option.type)}
          >
            <p>
              <strong>{option.subtitle}</strong>
            </p>
            <p>{option.answer}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TestPage;
