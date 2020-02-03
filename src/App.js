import React, {Component} from 'react';
import styles from './App.module.css';
import Planet from './components/planet/planet.js';

    class App extends Component {
      constructor(props){
        super()

        this.onClick = this.onClick.bind(this);
        this.getPlanet = this.getPlanet.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
      }

      getPlanet(requestUrl){
        fetch(requestUrl)
        .then(res => res.json())
        .then((data) => {
          this.setState({ planet: data, color: this.getRandomColor() })
        })
        .catch(console.log)
      }


      getRandomColor(){
        const getColor = Math.floor(Math.random() * 4 + 1)
        switch(getColor) {
          case 1:
            return styles.red;
          case 2:
            return styles.blue;
          case 3:
            return styles.green;
          case 4:
            return styles.purple;
          default:
            return styles.purple;
        }
      }

      componentWillMount() {
        const requestUrl = 'https://swapi.co/api/planets/' + Math.floor(Math.random() * 61 + 1)   +  '/';
        this.getPlanet(requestUrl);
        this.setState({ color: this.getRandomColor() })
      }

      onClick(e) {
        const requestUrl = 'https://swapi.co/api/planets/' + Math.floor(Math.random() * 61 + 1)   +  '/';
        this.getPlanet(requestUrl);
      }


      render () {
        return (
          <div className={styles.content}>
            <center>
              <img src="https://www.freepnglogos.com/uploads/star-wars-logo-design-14.png" />
              <div>{this.state.planet ? <Planet planet={this.state.planet} color={this.state.color} /> : null}</div>
              <button onClick={this.onClick} className={this.state.color}>Next</button>
            </center>
          </div>
        );
      }
    }

    export default App;