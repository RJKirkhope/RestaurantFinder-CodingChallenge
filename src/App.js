import React, { Component } from 'react';
import './App.css';

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
  render() {
  const {error, isLoaded, restaurantData} = this.state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    console.log(restaurantData)

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hand Shake Acquired</h1>
          <ul>
          {restaurantData.map(restaurant => (
            <li key={restaurant.id}>
              {restaurant.name}
            </li>
          ))}
        </ul>
        </header>
      </div>
    );
  }
}
}

export default App;
