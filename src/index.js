import React, { Component } from 'react';
import Input from './input/input'
import Textarea from './input/textarea'
import Number from './input/number'
import Autocomplete from './input/autocomplete'
import Radiogroup from './input/radiogroup'
import Checkbox from './input/checkbox'
import Select from "./input/select";
import File from "./input/file";
import Paragraph from "./input/paragraph";
import Header from "./input/header";
import Button from "./input/button";
import Hiddeninput from "./input/hiddeninput";


class GenerateForm extends Component {

    state = {
        formHasFilesUpload: false,
        formJson: []
    }

    //initial state
    constructor(props){
        super();

        if(props.formJson)
            props.formJson.map((item)=>{
                if(item.typeField == "fileUpload")
                    this.state.formHasFilesUpload = true
            })
    }

    counter = 0;
    getCounter = ()=>{
        return this.counter++;
    }

    result = {
    }

    addToResult = (name, value)=>{
        this.result[name]=value
    }



    render() {
        return (
            <div className="field-input">
            <form action="">
            <fieldset>
            {!this.props.formJson?(""):(
            <div>
            {this.props.formJson.map(item=>(
                <div key={this.getCounter()}>
        {(()=>{
            switch (item.typeField){
                case "text":
                    return <Input addToResult={this.addToResult} formJson={item} />
        case "textArea":
            return <Textarea addToResult={this.addToResult} formJson={item} />
        case "number":
            return <Number addToResult={this.addToResult} formJson={item} />
        case "autocomplete":
            return <Autocomplete addToResult={this.addToResult} formJson={item} />
        case "inputRadio":
            return <Radiogroup addToResult={this.addToResult} formJson={item} />
        case "inputCheckbox":
            return <Checkbox addToResult={this.addToResult} formJson={item} />
        case "select":
            return <Select addToResult={this.addToResult} formJson={item} />
        case "fileUpload":
            return <File addToResult={this.addToResult} formJson={item} />
        case "paragraph":
            return <Paragraph addToResult={this.addToResult} formJson={item} />
        case "header":
            return <Header addToResult={this.addToResult} formJson={item} />
        case "button":
            return <Button addToResult={this.addToResult} formJson={item} />
        case "hiddenInput":
            return <Hiddeninput addToResult={this.addToResult} formJson={item} />
        }})()}
    </div>
    ))}
    </div>
    )}
    </fieldset>
        </form>
        </div>
    );
    }
}



export default GenerateForm;