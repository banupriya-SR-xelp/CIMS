import React from "react";
import styles from "./Header.module.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.imageHolder} />
        <div className={styles.heading}>Computer Instituation And Managment System</div>
      </header>
    );
  }
}
