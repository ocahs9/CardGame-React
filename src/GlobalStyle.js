import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
//reset은 기본 reset값을 이용한다.
const GlobalStyle = createGlobalStyle`
${reset}
*{
  font-size: 62.5%; //1rem = 10px;가 되도록 설정.
}
button{
  cursor: pointer;
}

`;

export default GlobalStyle;

