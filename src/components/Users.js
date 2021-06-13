/*  import React, { Component } from "react";
import axios from "axios";

 let Users = (props) => {
   
  axios.get('https://jordan.ashton.fashion/api/goods/30/comments').then(response => {
  debugger;  
  props.setUsers({
    isLoaded: true,
    items: result.items
  })

  }) 

  

return(<div className="App">
   <div>
  <div>{}</div>
</div>
</div>
);
}
export default Users; 



class Users extends React.Component {

  getUsers = () => {
    axios
      .get("https://jordan.ashton.fashion/api/goods/30/comments")
      .then((response) => {
        this.props.setUsers(response.data.data);
        console.log(this.setUsers);

      });
  };

  render() {
    
    return(
     <button onClick={this.setUsers}></button>
    );
        }
      }

      export default Users
  
     return (
        <ul>
          {data.map(data => (
            <li key={data.id}>
              {data.name} {data.text}
            </li>
          ))}
        </ul>
      );  */