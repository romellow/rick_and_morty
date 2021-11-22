import React from "react";
import "./styles.css";

class CharList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              items: data.results
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
      } else if (!isLoaded) {
        return <div>Загрузка ... </div>;
      }
      return (
        <ul className="charList">
          {items.map((char) =>(
            <>
            <li key={char.id}><p>{char.name}</p>
            <img alt={char.name} src={char.image} className="avatar"></img>
            </li>
            </>
          ))}
        </ul>
      )
    }
  }

  export default CharList;