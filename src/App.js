import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
import Table from './Table.js';

class App extends Component {
  state={
    error:null,
    isLoaded:false,
    restaurantData:[],
  }
  
  componentDidMount(){
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
      Authorization: "Api-Key q3MNxtfep8Gt",
      },
      })
    .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            restaurantData: res,
            search: "",
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
        }
    receiveSearch = (event) => {
      this.setState({search: event})
    }

  render() {
  const {error, isLoaded, restaurantData} = this.state;

  let searchableRestaurants = restaurantData.filter(
    (restaurant) => {
      return restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="App">
        <Header />
        <div className="restaurantSearch">
            <span className="search-text">
              <h4>Search For A Restaurant</h4>
            </span>
            <Search receiveSearch={this.receiveSearch}/>
        </div>
        <div className="restaurantTable">
            <span className="table-text">
              <h4>Here Are The Restaurants</h4>
            </span>
            <Table receiveTable={searchableRestaurants}/>
        </div>
        <Footer />
      </div>
    );
  }
}
}

export default App;
