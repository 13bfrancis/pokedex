import styled from 'styled-components';

const getColor = pType => {
  if (pType === 'Poison') return 'purple';
  if (pType === 'Fire') return 'red';
  if (pType === 'Grass') return 'green';
  if (pType === 'Flying') return 'skyblue';
  if (pType === 'Water') return 'blue';
  if (pType === 'Electric') return 'yellow';
  return 'black';
};

const ListType = styled.li`
  color: ${props => getColor(props.pType)};
`;

export default ListType;
