import styled from 'styled-components';

//filp = true/false (매칭여부에 따라서 결정된 값)
function Card({idx, selectCard, imgSrc, isFlipped, clickedCards}) {  
  const handleCard = () => {
    selectCard(parseInt(idx));
    }
  
  //클릭하지 못하게 할 때 사용될 함수
  const cantClick = () =>
  {
    console.log("더 이상 클릭할 수 없습니다.");
  } 
  return (
    <>
      <CardWrapper 
        onClick={isFlipped? cantClick : handleCard} //이미 돌아가 있는거라면(오픈되어 있다면) 더 클릭하지 못하게 만듬
        $isFlipped = {isFlipped}
      >
        <FrontImg src={imgSrc} alt='front' />
        <BackImg src = "/src/assets/react.svg" alt="back" />
      </CardWrapper>
    </>
  );
  }

const CardWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border: 2px solid pink;

  transform-style: preserve-3d; //직계 자식들이 3d 공간을 향유할 수 있도록 설정(기본값: flat)

  
  transform: ${({ $isFlipped }) =>
    $isFlipped ? "rotateY(180deg)" : "rotateY(0)"};
  transition: transform 0.5s ease-in-out;
`;

const FrontImg = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;

  backface-visibility: hidden; //3d로 보았을 때, 뒷면을 보이게 할 것인지 설정

  transform:  rotateY(180deg);
  
`;

const BackImg = styled.img`
  position: absolute;
  width: 10rem;
  height: 10rem;

  backface-visibility: hidden; //3d로 보았을 때, 뒷면을 보이게 할 것인지 설정

  background-color: ${({ theme }) => theme.colors.lightPurple};
`;


export default Card;
