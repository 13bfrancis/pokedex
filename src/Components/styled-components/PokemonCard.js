import styled from 'styled-components';

const PokemonCard = styled.div`
  background: #fff;
  flex-basis: 40%;
  margin: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  height: 200px;
  transition: transform linear 0.1s;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 600px) {
    flex-basis: 80%;
  }
`;
export default PokemonCard;
