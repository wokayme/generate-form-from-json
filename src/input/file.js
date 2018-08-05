import React, { Component } from 'react';


class File extends Component {


    state={
        text: ""
    }

    //initial state
    constructor(props){
        super()
        this.state.text = props.formJson.value || ""
        props.addToResult(props.formJson.name,this.state.text)


        this.fileInput = React.createRef()

    }

    //change input value
    changeValue(e){

        this.setState({
            text: e.target.value
        },()=>{
            this.props.addToResult(this.props.formJson.name,this.fileInput.current.files)
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
                    <input ref={this.fileInput} type="file" className="custom-file-input" id="validatedCustomFile" onChange={e=>this.changeValue(e)} />
                    {/*Input*/}
                    <input className={this.props.formJson.class || 'form-control'}
                           type={this.props.formJson.type || 'text'} onChange={e=>this.changeValue(e)}
                           value={this.state.text}
                           name={this.props.formJson.name}
                           placeholder={this.props.formJson.placeholder}
                           minLength={this.props.formJson.min_length}
                           maxLength={this.props.formJson.max_length}/>
                    {this.props.formJson.sufix}
                </label>
                {this.props.formJson.tipText?(<p>{this.props.formJson.tipText}</p>):("")}
            </div>
        );
    }
}



export default File;