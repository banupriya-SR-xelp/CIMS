import React from "react";
import styles from "./Login.module.css";
import Input from "./components/general/Input.js";
import Button from "./Button.js";

export default class ResetPassword extends React.Component {
  render() {
    return (
      <div className={styles.mainSection}>
        <div className={styles.subHeading}>Reset Password</div>
        <div className={styles.commonText}>
          Enter your email address that you used to register. We'll send you an
          email with a link to reset your password.
        </div>

        <div className={styles.emailHolder}>
          <Input placeholder="Email" />
        </div>
        <Button width="100%" height="50px" buttonContent="Send a reset link" />
        <div className={styles.commonText} onClick={this.props.goToLogin}><span className={styles.link}>Back to login</span></div>
      </div>
    );
  }
}
