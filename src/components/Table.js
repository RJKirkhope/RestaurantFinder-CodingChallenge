import React, { Component } from 'react';
import Search from './Search.js';
import Filter from './Filter.js';
import '../App.css';

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.receiveTable,
      currentPage: 1,
      itemsPerPage: 10,
      search: "",
      stateFilter: "",
      genreFilter: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  receiveFilter = (event) => {
    this.setState({stateFilter: event, genreFilter: event});
  }

  handleStateSelect = (event) => {
    this.setState({stateFilter: event});
  }

  handleGenreSelect = (event) => {
    this.setState({genreFilter: event});
  }

  receiveSearch = (event) => {
    this.setState({search: event});
  }

  render(){
    const { data, currentPage, itemsPerPage } = this.state;

    let dataStates = []
    let dataGenres = []

    data.map(index =>{
      dataStates.push(index.state)
      dataGenres.push(index.genre)
    });

    let filterStateData = data.filter(
      (restaurant) => {
        return restaurant.state.toLowerCase().indexOf(this.state.stateFilter.toLowerCase()) !== -1;
      }
    );

    let filterGenreData = filterStateData.filter(
      (restaurant) => {
        return restaurant.genre.toLowerCase().indexOf(this.state.genreFilter.toLowerCase()) !== -1;
      }
    );
    
    let searchableData = filterGenreData.filter(
      (restaurant) => {
        return restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentData = searchableData.slice(indexOfFirstItem, indexOfLastItem);
    let pageNumbers = [];
    let noResults = ''
    let currentPageText = 'Current Page:' +' '+ this.state.currentPage
    let pageText = 'Page:'

    for (let i = 1; i <= Math.ceil(searchableData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    if (currentData.length === 0){
      noResults = `We're Sorry, no items match your search parameters, please try again.`;
      pageText = '';
      currentPageText = '';
    }

    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <button className='pageButton' key={number} id={number} onClick={this.handleClick}>
          {number}
        </button>
      );
    });

    let listItems = currentData.map(function(restaurant, i) {
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

    return (
      <div className="tableContainer">
        <div className="restaurantSearchFilter">
          <div>
            <h4>Find A Retaurant</h4>
            <Search receiveSearch={this.receiveSearch} />
          </div>
          <div>
            <h4>Filter By State</h4>
            <Filter 
              filterObj={dataStates} 
              handleSelect={this.handleStateSelect} 
              stateValue={this.props.stateFilter} 
              receiveFilter={this.receiveFilter}
            />
          </div>
          <div>
            <h4>Filter By Genre</h4>
            <Filter 
              filterObj={dataGenres} 
              handleSelect={this.handleGenreSelect} 
              stateValue={this.props.genreFilter} 
              receiveFilter={this.receiveFilter}
            />
          </div>
        </div>
        <div className="pageButtonContainer">
          <div className='pageIndicator'>{currentPageText}</div>
          {pageText}{renderPageNumbers}
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
          <h2 className ="noResults">{noResults}</h2>
        </div>
        <div className="pageButtonContainer">
          {pageText} {renderPageNumbers}
          <div className='pageIndicator'>{currentPageText}</div>
        </div>
      </div>
    )
  }
}

export default Table;
