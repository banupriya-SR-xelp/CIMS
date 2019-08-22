import React from "react";
import styles from "./Login.module.css";
import Input from "./components/general/Input.js";
import Button from "./Button.js";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.mainSection}>
          <div className={styles.divideSection}>
            <div className={styles.divideSectionOne}>
              <Input type="text" placeholder="First Name" />
            </div>
            <div className={styles.divideSectionTwo}>
              <Input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className={styles.emailHolder}>
            <Input type="email" placeholder="Enter Reg.No" />
          </div>
          <div className={styles.emailHolder}>
            <Input placeholder="New Password" />
          </div>
          <div className={styles.textHolder}>
            By clicking create an account you agree to our{" "}
            <span className={styles.link}>terms & conditions </span>
            and <span className={styles.link}>privacy policy</span>
          </div>
          <Button
            width="100%"
            height="50px"
            buttonContent="Create an account"
            onClick={this.props.goToHome}
          />
          <div className={styles.commonText}>
            Already a member ?{" "}
            <span className={styles.link} onClick={this.props.goToLogin}>
              Login
            </span>
          </div>
        </div>
      </div>
    );
  }
}
