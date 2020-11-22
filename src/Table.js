import React, {Component} from 'react';
import './App.css';

class Table extends Component {

  render(){
    var listItems = this.props.receiveTable.map(function(restaurant, i) {

    return(
          <tr key={i}>
              <td className='nameTd'>{restaurant['name']}</td>
              <td style={{whiteSpace: 'pre-wrap'}}>{restaurant['address1']+'\n'+restaurant['city']+' '+restaurant['state']+' '+restaurant['zip']}</td>
              <td style={{whiteSpace: 'pre-wrap'}}>{restaurant['genre'].split(',').join('\n')}</td>
              <td style={{whiteSpace: 'pre-wrap'}}>{restaurant['hours'].split(';').join('\n')}</td>
              <td>{restaurant['telephone']}</td>
              <td><button><a href={restaurant['website']} target="_blank">Visit Website</a></button></td>
          </tr>
      )
  });

    return (
      <div className="tableDiv">
        <table>
          <tr>
            <th className='name'>Name</th>
            <th className='address'>Address</th>
            <th className='genre'>Genre</th>
            <th className='hours'>Hours</th>
            <th className='phone'>Phone</th>
            <th className='websites'>Website</th>
          </tr>
        {listItems}
        </table>
      </div>
    )
  }
}

export default Table;