const Questions = [
  {
    question: "며칠째 연패해서 화가 난 친구에게",
    options: [
      {
        subtitle: "한잔 하겠나?",
        answer: "팀운이 안 좋았다며 위로한다.",
        type: "F",
      },
      {
        subtitle: "훌륭한 판단의 표본이로군.",
        answer: "한번 큐 돌려봐, 뭐가 문젠지 같이 봐줄게.",
        type: "T",
      },
    ],
  },
  {
    question: "신챔 출시!",
    options: [
      {
        subtitle: "트롤 한판 해볼까?",
        answer: "대충 스킬 구성과 룬 정도만 찾아보고 일단 큐를 돌린다.",
        type: "P",
      },
      {
        subtitle: "상황 파악 끝, 최고의 전투기까지 있다고!",
        answer:
          "유튜브에서 신챔 설명, 콤보 영상을 찾아보고 사용자 설정 게임에서 연습까지 한 번 해본다.",
        type: "J",
      },
    ],
  },
  {
    question: "롤 경기를 보면서 나는...",
    options: [
      {
        subtitle: "정말 현명한 선택이에요!",
        answer: "치킨이나 먹으면서 볼까 생각한다.",
        type: "S",
      },
      {
        subtitle: "세상을 바꿔보는 거야!",
        answer: "'내가 프로게이머였으면 어떻게 세레모니할까'하며 상상한다.",
        type: "N",
      },
    ],
  },
  {
    question:
      "칼바람에서 우연히 만나 재밌게 채팅치던 4인큐가 게임 끝나고 나를 초대했다.",
    options: [
      {
        subtitle: "만나서 반갑습니다~",
        answer: "재밌고 잘하던데 같이 몇판 하자!",
        type: "E",
      },
      {
        subtitle: "제 길은 제가 찾을게요.",
        answer: "하던대로 솔큐를 돌린다.",
        type: "I",
      },
    ],
  },
  {
    question: "팀원이 나를 타겟으로 정치질을 한다.",
    options: [
      {
        subtitle: "행운은 멍청이를 싫어하는 법이지.",
        answer: "무시하고 빡겜해서 캐리로 증명한다.",
        type: "T",
      },
      {
        subtitle: "시스템 가동 준비 완료.",
        answer: "저런 사람은 이겨줄 가치도 없다. 채팅으로 받아칠 준비 완료.",
        type: "F",
      },
    ],
  },
  {
    question: "나만의 상점에 평소에 사고 싶었던 스킨이 떴다.",
    options: [
      {
        subtitle: "정교함이 없다면 망나니일뿐.",
        answer: "다음주에나 돈 생기는데 좀 더 생각해보자.",
        type: "J",
      },
      {
        subtitle: "누구도 날 막지 못해!",
        answer: "당장 지른다 딱 대~",
        type: "P",
      },
    ],
  },
  {
    question: "내가 주로 픽하는 챔피언은...",
    options: [
      {
        subtitle: "날 선택 해줄 줄은 정말 몰랐어...",
        answer: "비주류여도 재밌고 나랑 잘맞는 챔피언.",
        type: "N",
      },
      {
        subtitle: "난, 최강이다.",
        answer: "무조건 이길 수 있는 쎈챔. 상대가 픽하는거 보고 카운터픽 한다.",
        type: "S",
      },
    ],
  },
  {
    question: "오늘 저녁에 친구들과 다인큐 약속이 잡혀있다.",
    options: [
      {
        subtitle: "정찰대의 규율을 깔보지 마시길.",
        answer: "약속 시간 10분 전부터 클라이언트 켜놓고 기다린다.",
        type: "J",
      },
      {
        subtitle: "그래.",
        answer: "대충 누워있으면 시간 되겠지? ..일단 라면이나 끓여먹을까?",
        type: "P",
      },
    ],
  },
  {
    question: "롤은 역시,",
    options: [
      {
        subtitle: "친구랑 같이 해야 신나는 법!",
        answer: "클라이언트 친구창을 살펴본다.",
        type: "E",
      },
      {
        subtitle: "바위처럼 단단하게.",
        answer: "독고다이가 최고.",
        type: "I",
      },
    ],
  },
  {
    question:
      "삶과 죽음의 순환은 계속된다. 우리는 살 것이고 저들은 죽을 것이다...",
    options: [
      {
        subtitle: "...죽음은 바람과 같지 늘 내 곁에 있으니.",
        answer: "(생각에 잠긴다.)",
        type: "I",
      },
      {
        subtitle: "시간이 얼마나 있는지는 상관없어.어떻게 쓰느냐가 중요하지. ",
        answer: "(...대체 뭔 소리야?)",
        type: "E",
      },
    ],
  },
  {
    question: "친구들과 게임할 때 나는,",
    options: [
      {
        subtitle: "보이지 않는 검이 가장 무서운 법.",
        answer: "다른 사람의 오더를 따르면서 나의 최선을 다한다.",
        type: "F",
      },
      {
        subtitle: "이 사건은 내가 맡죠.",
        answer: "적극적으로 오더하고 의견을 얘기한다.",
        type: "T",
      },
    ],
  },
  {
    question: "초반 라인전에서 솔킬을 두 번 따였다.",
    options: [
      {
        subtitle: "누구도 날 막지 못해!",
        answer: "다른 라인 갱을 가는 등 현재 이득볼 수 있는걸 한다.",
        type: "T",
      },
      {
        subtitle: "슈리마여! 너의 황제가 돌아왔다.",
        answer: "후반에 어떻게 왕귀각을 볼지 생각해본다.",
        type: "N",
      },
    ],
  },
];

export default Questions;
