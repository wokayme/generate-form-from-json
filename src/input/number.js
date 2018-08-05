import React, { Component } from 'react';


class Number extends Component {


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
                    <input className={this.props.formJson.class || 'form-control'}
                           required={this.props.formJson.required}
                           type="number" onChange={e=>this.changeValue(e)}
                           value={this.state.text}
                           name={this.props.formJson.name}
                           placeholder={this.props.formJson.placeholder}
                           step={this.props.formJson.step}
                           min={this.props.formJson.min_value}
                           max={this.props.formJson.max_value}/>
                    {this.props.formJson.sufix}
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Number;