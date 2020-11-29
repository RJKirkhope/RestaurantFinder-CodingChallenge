import React from 'react';

function Search (props) {
  
  return (
    <div>
      <input 
        className="search" 
        type="text" 
        placeholder="Restaurant Name..."
        onChange={(event)=> props.receiveSearch(event.target.value)}
      />
    </div>
  )
}

export default Search;
