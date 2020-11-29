import React from 'react';

function Filter (props) {
  const data = props.filterObj;

  var Arr=[]

  // if multiple items in a string split at comma and push to array
  data.map(string => {
    Arr.push(string.split(','))
  });

  // if multiple arrays exist within the array, combine them all into one
  var combineOptionsArr = [].concat.apply([], Arr);
  
  //remove duplicate options
  var uniqueOptions = combineOptionsArr.filter((v, i, a) => a.indexOf(v) === i);

  //alphabetize the results
  uniqueOptions.sort((a, b) => a.localeCompare(b));

  let optionValue = uniqueOptions.map(data => {
    return <option key={data} value={data}>{data}</option>
  });

  return (
    <div>
      <select 
        className="filter" 
        value={props.stateValue} 
        onChange={(event) => props.handleSelect(event.target.value)}
      >
        <option value="" selected>None Selected</option>
        {optionValue}
      </select>
    </div>
  )
}

export default Filter;
