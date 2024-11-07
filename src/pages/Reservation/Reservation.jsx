import React from 'react';
import styles from './reservation.module.css';
import logo from "../../assets/logo.png";
import Header from "../../components/Header/indexHeader";


export function Reservation() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.header}>

        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Cadastrar Sala</button>
        </div>
        
      </div>
    </div>
  );
}

