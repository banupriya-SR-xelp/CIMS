import React, { Component } from "react";
import styles from "./Login.module.css";
import Input from "./components/general/Input.js";
import Button from "./Button.js";
import CenteredContent from "./components/general/CenteredContent";
export default class Registeration extends Component {
  render() {
    return (
      <div className={styles.mainSection}>
        <CenteredContent contentWidth="600px">
          <div class={styles.heading}>
            Your Not Registerd for Any Course Please Register
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}> Registration No : </span>
            <span className={styles.inputHolder}>
              <Input type="text" value={"01FB15ECS411"} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <span className={styles.text}>Select Course : </span>
            <span className={styles.inputHolder}>
              <Input type="text" value={"Networks"} />
            </span>
          </div>

          <div className={styles.resultHolder}>
            <span className={styles.text}>Amount to be paid :</span>{" "}
            <span className={styles.inputHolder}>
              <Input type="text" value={2000} />
            </span>
          </div>
          <div className={styles.resultHolder}>
            <Button
              width="100%"
              height="50px"
              text="20px"
              buttonContent="Submit"
              onClick={this.props.goToHome}
            />
          </div>
          <div>
            <div className={styles.heading}>"Course registerd"</div>
            <table>
              <tr>
                <th>Reg.No</th>
                <th>Name</th>
                <th>course</th>
                <th>start date</th>
                <th>end date</th>
                <th>amount to be paid</th>
              </tr>
              <tr>
                <td>01FB15ECS411</td>
                <td>BanuPriya</td>
                <td>Networks</td>
                <td>12/03/2019</td>
                <td>12/06/2019</td>
                <td>2000</td>
              </tr>
            </table>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
