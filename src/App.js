import React, {Component} from 'react';
import Planet from './components/planet/planet.js';

    class App extends Component {
      componentDidMount() {
        fetch('https://swapi.co/api/planets/1/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ planet: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          <div>{this.state ? <Planet planet={this.state.planet} /> : null}</div>
        );
      }
    }

    export default App;