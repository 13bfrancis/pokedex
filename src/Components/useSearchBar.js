import { useState } from 'react';

const useSearchBar = () => {
  const [searchText, updateSearchText] = useState('');
  const onChange = e => {
    updateSearchText(e.target.value);
  };
  return { searchText, onChange };
};

export default useSearchBar;
