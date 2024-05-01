import styled from 'styled-components';
import Card from './Card';

function CardSection({renderedCards, clickedCards, selectCard}){

  return (
  <StyledCardSection>
    {renderedCards.map((obj, idx)=>{ {/*map해서 card 리턴하는 로직 */}
      return(
          <Card 
          key ={`card-${idx}`} 
          idx = {`${idx}`} 
          selectCard ={clickedCards.length < 2 ? selectCard: null} /*2보다 클 경우, 더이상 클릭하지 못하게 null을 반환 - 근데 내 코드상 필요 없긴 함*/
          imgSrc={obj.imgSrc} 
          isFlipped = {renderedCards[idx].status} /*상태에 따라 플립 여부가 결정 */
          clickedCards = {clickedCards}
          />
      );
    })}
  </StyledCardSection>); 
}


const StyledCardSection = styled.section`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 70vh;

  position: relative;
  top: 30vh;
  
`;
export default CardSection;