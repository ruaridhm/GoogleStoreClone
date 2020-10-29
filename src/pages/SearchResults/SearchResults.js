import React from 'react';
import './SearchResults.css';

const SearchResults = ({ searchQuery, noResultImage }) => {
  return (
    <div className='no-results-container'>
      <h1 className='no-results-header'>
        No results found for "{searchQuery}"
      </h1>
      <div className='no-results-message'>
        Try a different or more general search.
      </div>
      <img className='no-results-img' src={noResultImage} />
      <div className='no-results-bottom'></div>
    </div>
  );
};

export default SearchResults;
