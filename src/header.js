import React from "react";
import styles from "./Header.module.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.imageHolder} />
      </header>
    );
  }
}
