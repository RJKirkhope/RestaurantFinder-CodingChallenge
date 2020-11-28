import React, { Component } from 'react';
import Search from './Search.js';
import './App.css';

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.receiveTable,
      currentPage: 1,
      itemsPerPage: 10,
      search: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  receiveSearch = (event) => {
    this.setState({search: event})
  }

  render(){
    const { data, currentPage, itemsPerPage } = this.state;
    
    let searchableData = data.filter(
      (restaurant) => {
        return restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = searchableData.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = [];
    let noResults = ''

    for (let i = 1; i <= Math.ceil(searchableData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className='pageButton' key={number} id={number} onClick={this.handleClick}>
          {number}
        </button>
      );
    });

    var listItems = currentData.map(function(restaurant, i) {

    return(
          <tr key={i}>
              <td className='nameTd'>{restaurant['name']}</td>
              <td className='addressTd' style={{whiteSpace:'pre-wrap'}}>{restaurant['address1']+'\n'+restaurant['city']+' '+restaurant['state']+' '+restaurant['zip']}</td>
              <td className='genreTd' style={{whiteSpace:'pre-wrap'}}>{restaurant['genre'].split(',').join('\n')}</td>
              <td className='hoursTd' style={{whiteSpace:'pre-wrap'}}>{restaurant['hours'].split(';').join('; \n')}</td>
              <td className='phoneTd'>{restaurant['telephone']}</td>
              <td><button className='websiteTd'><a href={restaurant['website']} target="_blank">Visit Website</a></button></td>
          </tr>
      )
    });
    
    if (currentData.length === 0){
        noResults = `We're Sorry, no items match your search parameters, please try again.`
    }

    return (
      <div className="tableDiv">
        <div className="restaurantSearch">
          <span className="search-text">
            <h4>Find A Retaurant</h4>
          </span>
          <Search receiveSearch={this.receiveSearch}/>
          </div>
            <div className="pageButtonContainer">
              <div className='pageIndicator'>Current Page: {currentPage}</div>
              Page:{renderPageNumbers}
            </div>
          <table>
            <tbody>
              <tr>
                <th className='name'>Name</th>
                <th className='address'>Address</th>
                <th className='genre'>Genre</th>
                <th className='hours'>Hours</th>
                <th className='phone'>Phone</th>
                <th className='website'>Website</th>
              </tr>
              {listItems}
            </tbody>
          </table>
          <div>
            <h2>{noResults}</h2>
          </div>
            <div className="pageButtonContainer">
              Page: {renderPageNumbers}
              <div className='pageIndicator'>Current Page: {currentPage}</div>
            </div>
      </div>
    )
  }
}

export default Table;