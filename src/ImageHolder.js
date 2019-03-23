import React, { Component } from "react";
import styles from "./Course.module.css";
export default class ImageHolder extends Component {
  render() {
    return (
      <div className={styles.base}>
        <a href={this.props.link ? this.props.link : "#"} target="_blank">
          <div className={styles.Imageholder}>
            <img src={this.props.image} width="100%" height="90%" />
          </div>
          <div className={styles.heading}>
            <div className={styles.text}>{this.props.title}</div>
          </div>
        </a>
      </div>
    );
  }
}
