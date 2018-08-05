import React, { Component } from 'react';


class Textarea extends Component {


    state={
        text: ""
    }

    //initial state
    constructor(props){
        super()
        this.state.text = props.formJson.value || ""
        props.addToResult(props.formJson.name,this.state.text)
    }

    //change input value
    changeValue(e){

        this.setState({
            text: e.target.value
        },()=>{
            this.props.addToResult(this.props.formJson.name,this.state.text)
        })



    }
    render() {
        return (
            <div className="form-group">
                <label className="mainLabel inputLabel">
                    {/*Label*/}
                    <span>
                        {this.props.formJson.label}
                        {this.props.formJson.required ? (
                            <span className="required">
                                *
                            </span>
                        ):("")}
                    </span>
                    {/*Input*/}
                    <textarea
                        required={this.props.formJson.required}
                        name={this.props.formJson.name}
                        id=""
                        cols={this.props.formJson.cols||30}
                        rows={this.props.formJson.rows||10}
                        defaultValue={this.state.text}
                        placeholder={this.props.formJson.placeholder}
                        minLength={this.props.formJson.min_length}
                        maxLength={this.props.formJson.max_length}
                        className={this.props.formJson.class || "form-control"}
                        onChange={e=>this.changeValue(e)}
                    >

                    </textarea>
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Textarea;