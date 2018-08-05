import React, { Component } from 'react';


class Autocomplete extends Component {


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
        props.addToResult(props.formJson.name,"")
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
                    <input className={this.props.formJson.class || 'form-control'}
                           required={this.props.formJson.required}
                           type={this.props.formJson.type || 'text'} onChange={e=>this.changeValue(e)}
                           value={this.state.text}
                           name={this.props.formJson.name}
                           placeholder={this.props.formJson.placeholder}
                           minLength={this.props.formJson.min_length}
                           maxLength={this.props.formJson.max_length}
                           list={this.state.connector}
                    />
                    <datalist id={this.state.connector}>

                            {this.props.formJson.options.map(item=>(
                                <option key={this.getCounter()} value={item.value}>{item.label}</option>
                            ))}
                    </datalist>
                    {this.props.formJson.sufix}
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default Autocomplete;