import React from "react";
import InputController from "../functionalComponents/InputController";
import styles from "./Input.module.css";
const TextInput = React.forwardRef((props, ref) => (
  <input {...props} ref={ref} />
));

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.inputRef = React.createRef();
  }
  handleChange = (value, event) => {
    if (this.props.onChange) {
      this.props.onChange(value, event);
    }
  };
  handleFocus = (value, event) => {
    if (this.props.onFocus) {
      this.props.onFocus(value, event);
    }
    this.setState({ focused: true });
  };
  handleBlur = (value, event) => {
    if (this.props.onBlur) {
      this.props.onBlur(value, event);
    }
    this.setState({ focused: false });
  };
  handleKeyPress = (value, event) => {
    if (this.props.onKeyPress) {
      this.props.onKeyPress(value, event);
    }
  };
  handleKeyUp = (value, event) => {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(value, event);
    }
  };
  handleKeyDown = (value, event) => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(value, event);
    }
  };
  blurInput = () => {
    this.inputRef.current.blur();
  };
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    const styleClass = this.props.styleClass
      ? this.props.styleClass
      : styles.base;
    const focusClass = this.props.focusClass
      ? this.props.focusClass
      : styles.baseFocused;

    return (
      <div>
        <InputController
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onKeyUp={this.handleKeyUp}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          render={funcs => (
            <div className={this.state.focused ? focusClass : styleClass}>
              <TextInput
                {...this.props}
                onChange={event => {
                  funcs.onChange(event);
                }}
                onFocus={event => {
                  funcs.onFocus(event);
                }}
                onBlur={event => {
                  funcs.onBlur(event);
                }}
                onKeyPress={event => {
                  funcs.onKeyPress(event);
                }}
                onKeyUp={event => {
                  funcs.onKeyUp(event);
                }}
                onKeyDown={event => {
                  funcs.onKeyDown(event);
                }}
                ref={this.inputRef}
              />
            </div>
          )}
        />
      </div>
    );
  }
}
