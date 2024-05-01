import styled from "styled-components";
import theme from "../../theme";

function ModeBtn({modeString, modeHandle}){
  return(
    <StyledBtn onClick={modeHandle}>{modeString}</StyledBtn>
  );
}

const StyledBtn = styled.button`
  width: 10rem ;
  height: 2rem;

  border-radius: 0.6rem;
  border: 2px solid ${theme.colors.skyBlue};
  background-color: ${theme.colors.lightPurple};

  margin: 1rem;

  @keyframes scaling{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(1.05);
  }
  100%{
    transform: scale(1);
  }
}

  &:hover{
    background-color: aliceblue;
    animation: scaling 0.5s linear;
  }
`;

export default ModeBtn