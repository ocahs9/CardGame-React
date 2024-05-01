import styled from "styled-components";
import theme from "../../theme";

function CompleteModal({resetCurrentMode}){
  
  return(
  <ModalWrapper>
    <Modal>
      축하합니다 !
      <br/>
      <br/>
      카드를 전부 맞추셨습니다 👍
      <CloseBtn onClick={resetCurrentMode}>X</CloseBtn>
    </Modal>
  </ModalWrapper>
  );

}

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  width: 30vw;
  height: 30vh;
  
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

const CloseBtn = styled.button`
  width: 5vw;
  height: 5vh;

  position: absolute;
  top:0;
  right: 0;

  background-color: ${theme.colors.lightPurple};

  font-size: ${theme.fonts.md};
`;

export default CompleteModal