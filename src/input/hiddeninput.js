import React, { Component } from 'react';


class Hiddeninput extends Component {


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
                    {/*Input*/}
                    <input
                           type="hidden" onChange={e=>this.changeValue(e)}
                           value={this.state.text}
                           name={this.props.formJson.name}/>
            </div>
        );
    }
}



export default Hiddeninput;