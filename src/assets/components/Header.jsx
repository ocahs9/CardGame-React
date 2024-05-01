import styled from 'styled-components';
import theme from '../../theme';


//컴포넌트는 인자를 항상 {}로 받는 것을 잊지 말자! (혹은 props 객체 하나로)
function Header({score, goal, resetCurrentMode}){
  return(
  <>
    <CardGameHeader>
      <LineDiv>
        <p>앨범 카드 맞추기 게임</p>
        <ResetBtn onClick={resetCurrentMode}>Reset</ResetBtn>
      </LineDiv>
      <LineDiv>{`${score} / ${goal}`}</LineDiv>
    </CardGameHeader>
    
  </>); 
}
const ResetBtn = styled.button`
  position: absolute;
  right: 100px;

  width: 10%;
  &:hover{
    background-color: pink;
  }
`;

const LineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  text-align: center;
`;

const CardGameHeader = styled.header`
  z-index: 1;
  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 20vh;
  
  position:fixed;
  top:0px;
  
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.xl};
  
`;

export default Header;