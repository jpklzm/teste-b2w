import React, {Component} from 'react';
import styles from './App.module.css';
import Planet from './components/planet/planet.js';

    class App extends Component {
      requestUrl = 'https://swapi.co/api/planets/' + Math.floor(Math.random() * 61 + 1)   +  '/';

      constructor(props){
        super()

        this.onClick = this.onClick.bind(this);
        this.getPlanet = this.getPlanet.bind(this);
      }

      getPlanet(requestUrl){
        fetch(requestUrl)
        .then(res => res.json())
        .then((data) => {
          this.setState({ planet: data })
        })
        .catch(console.log)
      }

      componentWillMount() {
        const requestUrl = 'https://swapi.co/api/planets/' + Math.floor(Math.random() * 61 + 1)   +  '/';
        this.getPlanet(requestUrl);
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
              <div>{this.state ? <Planet planet={this.state.planet} /> : null}</div>
              <button onClick={this.onClick}>Next</button>
            </center>
          </div>
        );
      }
    }

    export default App;