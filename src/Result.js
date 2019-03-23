import React, { Component } from "react";
import styles from "./Login.module.css";
import Input from "./components/general/Input.js";
import Button from "./Button.js";
import student from "./img/student1.jpeg"
import CenteredContent from "./components/general/CenteredContent";
export default class Result extends Component {
  render() {
    return (
      <div className={styles.mainSection}>
        <div
          style={{
            border: "1px solid #212121",
            width: "200px",
            height: "200px",
            position: "absolute",
            margin: "10px 20px"
          }}
        >
        <img src={student} width="100%" height="100%"/>
        </div>
        <CenteredContent contentWidth="600px">
          <div className={styles.resultHolder}>
            <span className={styles.text}> Registration No : </span>
            <span className={styles.inputHolder}>
              <Input type="text" value={"01FB15ECS411"} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Course : </span>
            <span className={styles.inputHolder}>
              <Input type="text" value={"Networks"} />
            </span>
          </div>

          <div className={styles.resultHolder}>
            <span className={styles.text}>Year :</span>{" "}
            <span className={styles.inputHolder}>
              <Input type="text" value={"2018-2019"} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Total Marks : </span>
            <span className={styles.inputHolder}>
              <Input value={100} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Marks Scored : </span>
            <span className={styles.inputHolder}>
              <Input value={75} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Result : </span>
            <span className={styles.inputHolder}>
              <Input value={"First Class"} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Grade : </span>
            <span className={styles.inputHolder}>
              <Input value={"B+"} />
            </span>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
