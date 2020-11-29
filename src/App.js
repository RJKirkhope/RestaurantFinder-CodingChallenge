import React, { Component } from 'react';
import Header from './components/Header.js';
import Table from './components/Table.js';
import Footer from './components/Footer.js';
import './App.css';

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

      //alphabetize the data before passing it to the table.
      this.state.data.sort((a, b) => a.name.localeCompare(b.name))

      return (
        <div className="App">
          <Header />
          <div className="restaurantTable">
            <Table receiveTable={data}/>
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default App;
