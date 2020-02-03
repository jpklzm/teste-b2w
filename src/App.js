import React, {Component} from 'react';
import styles from './App.module.css';
import Planet from './components/planet/planet.js';

    class App extends Component {
      requestUrl = 'https://swapi.co/api/planets/' + Math.floor(Math.random() * 61 + 1)   +  '/';

      componentDidMount() {
        fetch(this.requestUrl)
        .then(res => res.json())
        .then((data) => {
          this.setState({ planet: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <div className={styles.content}>
            <center>
              <div>{this.state ? <Planet planet={this.state.planet} /> : null}</div>
              <button>Next</button>
            </center>
          </div>
        );
      }
    }

    export default App;