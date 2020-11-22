import React, {Component} from 'react';
import './App.css';

class Table extends Component {

  render(){
    var listItems = this.props.receiveTable.map(function(restaurant, i) {

    return(
          <tr key={i}>
              <td>{restaurant['name']}</td>
              <td style={{whiteSpace: 'pre-wrap'}}>{restaurant['address1']+'\n'+restaurant['city']+' '+restaurant['state']+' '+restaurant['zip']}</td>
              <td>{restaurant['genre']}</td>
              <td>{restaurant['hours']}</td>
              <td>{restaurant['telephone']}</td>
              <td><a href={restaurant['website']} target="_blank">Visit Website</a></td>

          </tr>
      )
  });

    return (
      <div className="tableDiv">
        <table>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Genre</th>
            <th>Hours</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        {listItems}
        </table>
      </div>
    )
  }
}

export default Table;