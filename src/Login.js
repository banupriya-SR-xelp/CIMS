import React from "react";
import styles from "./Login.module.css";
import Input from "./components/general/Input";
import Button from "./Button.js";

export default class Login extends React.Component {
  render() {
    return (
      <div className={styles.mainSection}>
        <div className={styles.emailHolder}>
          <Input placeholder="Email" />
        </div>
        <div className={styles.emailHolder}>
          <Input placeholder="New Password" />
        </div>
 

        <Button
          width="100%"
          height="50px"
          buttonContent="Login"
          onClick={this.props.goToHome}
          backgroundColor="#ff2121"
        />
        <div className={styles.commonText}>
          new user ?
          <span className={styles.link} onClick={this.props.goToSignup}>
            {" "}
            Signup
          </span>
        </div>
      </div>
    );
  }
}
