import React from "react";
import styles from "./CenteredContent.module.css";
export default class CenteredContent extends React.Component {
    render() {
        return (
            <div
                className={styles.base}
                style={{ backgroundColor: this.props.backgroundColor }}
            >
                <div
                    className={styles.content}
                    style={{ maxWidth: this.props.contentWidth }}
                >
                    {this.props.children}
                </div>
            </div>
        );
    }
}