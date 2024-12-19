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
  /* height: 100vh; */
  overflow: hidden;
  padding: 80px 16px 40px 16px;

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
    filter: blur(13px);
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 3;
    /* padding: 0 16px; */
    color: white;
    text-align: center;
    .resultMbti {
      font-size: 32px;
      letter-spacing: 3px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 15px;
    }
  }
`;

const BackBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const ChampionWrap = styled.div`
  .champQuote {
    font-size: 16px;
    color: #9b7f49;
    margin-bottom: 16px;
  }
  .champName {
    font-size: 24px;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: fill;
    box-shadow: 0 0 16px 6px rgba(238, 238, 238, 0.2);
    margin-top: 34px;
    margin-bottom: 34px;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      color: #efcd8b;
      font-size: 16px;
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }
  .champDesc {
    word-break: keep-all;
    font-size: 18px;
    line-height: 30px;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 20px;
  div {
    width: 155px;
    height: 1px;
    background-color: #fff;
    opacity: 0.2;
  }
  .linestar {
    width: 20px;
    height: 19px;
    box-shadow: none;
  }
`;

const MatchChamp = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  h4 {
    font-size: 14px;
    margin-bottom: 14px;
  }
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: 0 0 16px 6px rgba(238, 238, 238, 0.2);
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    margin-top: 8px;
    letter-spacing: 2px;
  }
`;

const MatchWithChamp = styled.div`
  width: 155px;
  h4,
  .champName {
    color: #d9e5ff;
    letter-spacing: 0;
  }
`;
const MconflictChamp = styled.div`
  width: 155px;
  h4,
  .champName {
    color: #ffd1d1;
    margin-top: 6px;
    letter-spacing: 0;
  }
`;

const SimilarBack = styled.div`
  margin-top: 30px;
  padding: 20px 0;
  width: 100%;
  height: 160px;
  border-radius: 10px;
  background-color: rgba(91, 87, 87, 0.4);
  h2 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #dbdbdb;
  }
  h3 {
    margin-top: 5px;
    font-size: 14px;
  }
  img {
    box-shadow: 0 0 14px 6px rgba(99, 99, 99, 0.4);
  }
`;

const SimilarWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
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
              <p className="resultMbti">{mbtiResult}</p>
              {randomChampion ? (
                <div className="champion">
                  <ChampionWrap>
                    <p className="champQuote">"{randomChampion.quote}"</p>
                    <h3 className="champName">{randomChampion.name}</h3>
                    <img
                      src={randomChampion.imageUrl}
                      alt={randomChampion.name}
                    />
                    <ul>
                      {randomChampion.features.map((features, index) => (
                        <li key={index}>#{features}</li>
                      ))}
                    </ul>
                    <p className="champDesc">{randomChampion.description}</p>
                  </ChampionWrap>
                  <SimilarBack>
                    <h2>성향이 비슷한 챔피언</h2>
                    <SimilarWrap>
                      {similarChampions.length > 0 ? (
                        similarChampions.map((champion, index) => (
                          <div key={index} className="champion">
                            <img
                              src={champion.imageUrl}
                              alt={champion.name}
                              width="100"
                            />
                            <h3>{champion.name}</h3>
                          </div>
                        ))
                      ) : (
                        <p>비슷한 성향의 챔피언이 없습니다.</p>
                      )}
                    </SimilarWrap>
                  </SimilarBack>

                  <MatchChamp>
                    <Line>
                      <div></div>
                      <img
                        className="linestar"
                        src="/imgs/LineStar.svg"
                        alt="linestar"
                      />
                      <div></div>
                    </Line>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <MatchWithChamp>
                        <h4>잘맞는 챔피언</h4>
                        <img
                          src={randomChampion.matchesWith.imageUrl}
                          alt="matchwithChamp"
                        />
                        <p>{randomChampion.matchesWith.mbti}</p>
                        <p className="champName">
                          {randomChampion.matchesWith
                            ? randomChampion.matchesWith.champion
                            : "없음"}
                        </p>
                      </MatchWithChamp>
                      <MconflictChamp>
                        <h4>안맞는 챔피언</h4>

                        <img
                          src={randomChampion.conflictsWith.imageUrl}
                          alt="matchwithChamp"
                        />
                        <p>{randomChampion.conflictsWith.mbti}</p>
                        <p className="champName">
                          {randomChampion.conflictsWith
                            ? randomChampion.conflictsWith.champion
                            : "없음"}
                        </p>
                      </MconflictChamp>
                    </div>
                  </MatchChamp>
                </div>
              ) : (
                <p>추천할 챔피언이 없습니다.</p>
              )}
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default ResultPage;
