import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultData from "./data/ResultData";
import styled from "styled-components";
import Loading from "../../components/Loading";
const Container = styled.section`
  width: 100%;
  max-width: 402px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.9);
    filter: blur(20px); /* 배경에 블러 추가 */
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 3; // 실제 콘텐츠가 블러 위에 위치하도록 설정
    padding: 0 16px;
    color: white;
    text-align: center;
  }
`;

const BackBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const ResultPage = () => {
  const location = useLocation();
  const answers = location.state?.answers || [];
  const [isLoading, setIsLoading] = useState(true);

  const calculateMbti = (answers) => {
    const mbti = {
      E: 0,
      I: 0,
      N: 0,
      S: 0,
      F: 0,
      T: 0,
      P: 0,
      J: 0,
    };

    answers.forEach((answer) => {
      mbti[answer.type]++;
    });

    return (
      (mbti.E > mbti.I ? "E" : "I") +
      (mbti.N > mbti.S ? "N" : "S") +
      (mbti.F > mbti.T ? "F" : "T") +
      (mbti.P > mbti.J ? "P" : "J")
    );
  };

  const mbtiResult = calculateMbti(answers);
  // console.log(mbtiResult);
  const champions = ResultData[mbtiResult] || [];
  // console.log(champions);
  //console.log(ResultData);

  const getRandomChampion = (champions) => {
    const randomIndex = Math.floor(Math.random() * champions.length);
    return champions[randomIndex];
  };

  // 선택된 챔피언을 제외한 비슷한 성향의 챔피언을 구하는 함수
  const getSimilarChampions = (champions, excludedChampion) => {
    return champions.filter(
      (champion) => champion.name !== excludedChampion.name
    );
  };

  const [randomChampion, setRandomChampion] = useState(null);
  const [similarChampions, setSimilarChampions] = useState([]);

  useEffect(() => {
    if (champions.length > 0) {
      // 랜덤 챔피언을 선택
      const selectedRandomChampion = getRandomChampion(champions);

      // 비슷한 성향의 챔피언을 선택된 챔피언을 제외하고 필터링
      const similar = getSimilarChampions(champions, selectedRandomChampion);

      setRandomChampion(selectedRandomChampion);
      setSimilarChampions(similar);
      setIsLoading(false);
    }
  }, [champions, mbtiResult]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container backgroundImage={randomChampion.backgroundImageUrl}>
            <BackBlur />
            <div className="content">
              <p>{mbtiResult}</p>
              {randomChampion ? (
                <div className="champion">
                  <p>{randomChampion.quote}</p>
                  <h3>{randomChampion.name}</h3>
                  <img
                    src={randomChampion.imageUrl}
                    alt={randomChampion.name}
                    style={{ borderRadius: "50%" }}
                  />
                  <ul>
                    {randomChampion.features.map((features, index) => (
                      <li key={index}>#{features}</li>
                    ))}
                  </ul>
                  <p>{randomChampion.description}</p>

                  <p>
                    잘맞는챔피언
                    {randomChampion.matchesWith
                      ? randomChampion.matchesWith.champion
                      : "없음"}
                  </p>
                </div>
              ) : (
                <p>추천할 챔피언이 없습니다.</p>
              )}

              <h2>비슷한 성향의 챔피언들</h2>
              {similarChampions.length > 0 ? (
                similarChampions.map((champion, index) => (
                  <div key={index} className="champion">
                    <h3>{champion.name}</h3>
                    <img
                      src={champion.imageUrl}
                      alt={champion.name}
                      width="100"
                    />
                  </div>
                ))
              ) : (
                <p>비슷한 성향의 챔피언이 없습니다.</p>
              )}
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default ResultPage;
