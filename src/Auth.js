import React from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import CenteredContent from "./components/general/CenteredContent";
import ResetPassword from "./ResetPassword.js";
import Home from "./Home.js";

export default class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      show: "login"
    };
  }
  goToLogin = () => {
    this.setState({ show: "login" });
  };
  goToSignup = () => {
    this.setState({ show: "signup" });
  };
  goToResetPassword = () => {
    this.setState({ show: "resetPassword" });
  };
  goToHome = () => {
    this.setState({ show: "Home" });
  };

  render() {
    console.log(this.state.show);
    return (
      <div>
        <CenteredContent contentWidth="400px">
          {this.state.show === "signup" && (
            <Signup goToLogin={this.goToLogin} goToHome={this.goToHome} />
          )}
          {this.state.show === "login" && (
            <Login
              goToSignup={this.goToSignup}
              goToResetPassword={this.goToResetPassword}
              goToHome={this.goToHome}
            />
          )}
          {this.state.show === "resetPassword" && (
            <ResetPassword goToLogin={this.goToLogin} />
          )}
        </CenteredContent>
        {this.state.show === "Home" && (
          <Home
            goToLogin={this.goToLogin}
            goToSignup={this.goToSignup}
            goToHome={this.goToHome}
          />
        )}
      </div>
    );
  }
}
