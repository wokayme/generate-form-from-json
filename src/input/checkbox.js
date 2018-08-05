import React, { Component } from 'react';


class Checkbox extends Component {


    state={
        text: "",
        id: ""
    }

    //initial state
    constructor(props){
        super()
        if(props.formJson.defaultSelected){
            this.state.text = true
        }else{
            this.state.text = false
        }
        props.addToResult(props.formJson.name,this.state.text)
    }

    //change input value
    changeValue(e){

        console.log(e.target.checked)
        this.setState({
            ...this.state,
            text: e.target.checked
        },()=>{
            this.props.addToResult(this.props.formJson.name,e.target.checked)
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
                    <input type="checkbox"
                           required={this.props.formJson.required}
                           defaultChecked={this.props.formJson.defaultSelected}
                           name={this.props.formJson.name}
                           onChange={e=>this.changeValue(e)}
                    />
                    {this.props.formJson.sufix}
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Checkbox;