import React from "react";

export default class InputController extends React.Component {
    onChange = event => {
        if (this.props.onChange) {
            this.props.onChange(event.target.value, event);
        }
        return event;
    };
    onFocus = event => {
        if (this.props.onFocus) {
            this.props.onFocus(event.target.value, event);
        }
    };
    onBlur = event => {
        if (this.props.onBlur) {
            this.props.onBlur(event.target.value, event);
        }
    };
    onKeyPress = event => {
        if (this.props.onKeyPress) {
            this.props.onKeyPress(event.target.value, event);
        }
    };
    onKeyUp = event => {
        if (this.props.onKeyUp) {
            this.props.onKeyUp(event.target.value, event);
        }
    };
    onKeyDown = event => {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event.target.value, event);
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.props.render({
                    onChange: this.onChange,
                    onFocus: this.onFocus,
                    onBlur: this.onBlur,
                    onKeyPress: this.onKeyPress,
                    onKeyUp: this.onKeyUp,
                    onKeyDown: this.onKeyDown
                })}
            </React.Fragment>
        );
    }
}
