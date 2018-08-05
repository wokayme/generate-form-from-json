import React, { Component } from 'react';


class Radiogroup extends Component {


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
        this.state.connector = "list_"+Math.random().toString(36).substring(9)
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
                <legend className="mainLabel inputLabel ">
                    {/*Label*/}
                    <span>
                        {this.props.formJson.label}
                        {this.props.formJson.required ? (
                            <span className="required">
                                *
                            </span>
                        ):("")}
                    </span>
                </legend>
                <div>
                    {this.props.formJson.options.map((item)=>(
                        <div className="form-check" key={this.getCounter()}>
                            <input className="form-check-input" type="radio" name={this.props.formJson.name} id="gridRadios1"
                                   required={this.props.formJson.required}
                                   value={item.value} defaultChecked={this.props.formJson.value == item.value} />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Radiogroup;