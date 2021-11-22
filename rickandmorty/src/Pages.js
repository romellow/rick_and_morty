import React from "react";
import "./styles.css";
import CharList from "./CharList";

class Pages extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    items: null
  };
}
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then(
      (data) => {
        this.setState({
          isLoaded: true,
          items: data.pages
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div> Ошибка : {error.message}</div>;
    }else if (!isLoaded){
      return <div>Загрузка ...</div>;
    }else{
      return (
        for(i = 0; i < items; i++){
          <div className="numbers">i</div>
        }
      );
    }
  }
}
export default Pages;