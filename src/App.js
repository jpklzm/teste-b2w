import React, {Component} from 'react';

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
          <div>{this.state ? this.state.planet.name : null}</div>
        );
      }
    }

    export default App;