import styled from 'styled-components';

const PokemonCard = styled.div`
  background: #fff;
  flex-basis: 40%;
  margin: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 600px) {
    flex-basis: 80%;
  }
`;
export default PokemonCard;
