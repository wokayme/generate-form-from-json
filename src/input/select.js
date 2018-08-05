import React, { Component } from 'react';


class Select extends Component {


    state={
        text: "",
        id: ""
    }

    counter = 0;

    getCounter = ()=>{
        return this.counter++
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
            ...this.state,
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
                    <select
                        required={this.props.formJson.required}
                        onChange={()=>this.changeValue()} className={this.props.formJson.class || 'form-control'} name={this.props.formJson.name} defaultValue={this.state.text}>
                        {this.props.formJson.options.map(item=>(
                            <option key={this.getCounter()}value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Select;