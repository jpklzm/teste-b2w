import React from 'react'

    const Planet = ({ planet }) => {
      return (
        <div>
            <center>
            <div class="card">
                <h1 class="card-title">{planet.name}</h1>
                <div class="card-body">
                    <p class="card-text">Population: {planet.population}</p>
                    <p class="card-text">Climate: {planet.climate}</p>
                    <p class="card-text">Featured in {Object.keys(planet.films).length} films</p>
                </div>
            </div>
            </center>
        </div>
      )
    };

export default Planet