import React, { Component } from "react";
import axios from "axios";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    axios.get('https://jordan.ashton.fashion/api/goods/30/comments')
      .then(
        (result) => {
          debugger;

          this.setState({
            isLoaded: true,
            data: result.data.data
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
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {data.map(data => (
            <li key={data.id}>
              {data.name} {data.text}
            </li>
          ))}
        </ul>
        
      );
    }
  }
}
export default MyComponent; 