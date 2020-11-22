import React from 'react';

function Search (props) {

  return (
    <div>
      <input id="search-bar" type="text" placeholder="Search..."
      onChange={(event)=> props.receiveSearch(event.target.value)}/>
    </div>
  )

}

export default Search;