import React, { Component } from 'react';


class Paragraph extends Component {

    //initial state
    constructor(props){
        super()
    }

    //change input value
    render() {
        return (
            <div className={this.props.formJson.class || "form-group"}>
                <p>
                    {this.props.formJson.content}
                </p>
            </div>
        );
    }
}



export default Paragraph;