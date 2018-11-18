import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = styled.header`
  width: 100%;
  height: 200px;
  background: blue;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default ({ onChange, searchText }) => {
  return (
    <Header>
      <h1
        style={{
          textAlign: 'center',
          color: 'yellow',
          margin: '5px',
          fontSize: '40px',
          flexBasis: '100%'
        }}
        onClick={() => {
          alert(searchText);
        }}
      >
        Pokemon
      </h1>
      <SearchBar
        type="text"
        placeholder="Enter Pokemon Name"
        onChange={onChange}
        value={searchText}
      />
    </Header>
  );
};
