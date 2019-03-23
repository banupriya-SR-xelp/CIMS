import React, { Component } from "react";
import styles from "./Home.module.css";
import Login from "./Login";
import CenteredContent from "./components/general/CenteredContent";
import HomePage from "./HomePage";
import Course from "./Course";
import Result from "./Result";
import Registeration from "./Registeration";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      show: "Home"
    };
  }
  componentDidMount(){
      this.setState({show:"Home"})
  }
  goToHome = () => {
    this.setState({ show: "Home" });
  };
  goToCourse = () => {
    this.setState({ show: "Course" });
  };
  goToRegistration = () => {
    this.setState({ show: "Register" });
  };
  goToResult = () => {
    this.setState({ show: "Result" });
  };
  goToLogout = () => {
    this.setState({ show: "Logout" });
    if(this.props.goToHome)
    {this.props.goToLogin()}
  };
  render() {
    return (
      <div className={styles.home}>
        <div>
          {this.state.show !== "Logout" && (
            <div className={styles.header}>
              <div
                className={styles.course}
                className={styles.lable}
                onClick={this.goToHome}
              >
                Home
              </div>
              <div
                className={styles.course}
                className={styles.lable}
                onClick={this.goToCourse}
              >
                course
              </div>
              <div
                className={styles.course}
                className={styles.lable}
                onClick={this.goToRegistration}
              >
                registration
              </div>
              <div
                className={styles.course}
                className={styles.lable}
                onClick={this.goToResult}
              >
                result
              </div>
              <div
                className={styles.course}
                className={styles.lable}
                onClick={this.goToLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
        <div className={styles.content}>
          {this.state.show === "Home" && <HomePage/>}
          {this.state.show === "Course" && <Course/>}
          {this.state.show === "Register" && <Registeration/>}
          {this.state.show === "Result" && <Result/>}

        
        </div>
      </div>
    );
  }
}
