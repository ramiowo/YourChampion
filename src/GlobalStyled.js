import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box; /* 모든 요소에 적용 */
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  body {
    font-family: "DX별과그대Bold";
    letter-spacing: -1px;
    
  }
  @font-face {
    font-family: "DX별과그대Bold";
    src: url("/fonts/DX별과그대Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "DX별과그대Medium";
    src: url("/fonts/DX별과그대Medium.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
