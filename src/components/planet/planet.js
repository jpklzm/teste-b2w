import React from 'react';
import styles from './planet.module.css';

    const Planet = ({ planet }) => {
      return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.cardTitle}>{planet.name}</h1>
                <div className={styles.cardBody}>
                    <p>Population: {planet.population}</p>
                    <p>Climate: {planet.climate}</p>
                    <p>Terrain: {planet.terrain}</p>
                </div>
                <p className={styles.cardFilms}>Featured in {Object.keys(planet.films).length} films</p>
            </div>
        </div>
      )
    };

export default Planet