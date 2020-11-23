import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Table from './Table.js';

class App extends Component {
  state={
    error:null,
    isLoaded:false,
    data:[],
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
            data: res,
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
  const {error, isLoaded, data} = this.state;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <div className="App">
        <Header />
        <div className="restaurantTable">
            <Table receiveTable={data}/>
        </div>
        <Footer />
      </div>
    );
  }
}
}

export default App;
