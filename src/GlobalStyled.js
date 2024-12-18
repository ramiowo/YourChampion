import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

@font-face {
    font-family: 'DXstar';
    src: url('/fonts/DXSnUB-KSCpc-EUC-H.ttf') format('opentype');
    font-style: normal;
}

  body {
    /* height: 100vh; */
    font-family: 'Dxstar';
    letter-spacing: -1px;
  }
`;
