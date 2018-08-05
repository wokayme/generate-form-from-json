import React, { Component } from 'react';


class Button extends Component {


    render() {
        return (
            <button type={this.props.formJson.type} className={this.props.formJson.class || 'form-control'}>
                {this.props.formJson.label}
            </button>
        );
    }
}



export default Button;