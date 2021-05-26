import React from 'react'; 
import axios from 'axios'; 
  
class databasematch extends React.Component { 
  
    state = { 
        details : [], 
    } 
  
    componentDidMount() { 
  
        let data ; 
  
        axios.get('http://localhost:8000/db/') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
                details : data     
            }); 
        }) 
        .catch(err => {}) 
    } 
  
  render() { 
    return( 
      <div> 
            {this.state.details.map((detail, id) =>  ( 
            <div key={id}> 
            <div > 
                  <div > 
                        <p>{detail.detail} </p>
                        <p> {detail.name}</p> 
                      <p> {detail.vehiclenumber}</p>
                      <p> {detail.email}</p>
                  </div> 
            </div> 
            </div> 
            ) 
        )} 
      </div> 
      ); 
  } 
} 
  
export default databasematch;