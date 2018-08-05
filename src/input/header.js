import React, { Component } from 'react';


class Header extends Component {

    //initial state
    constructor(props){
        super()
    }

    //change input value
    render() {
        return (
            <div className={this.props.formJson.class+" type_"+this.props.formJson.headerlevel}>
                {(()=>{
                    switch (this.props.formJson.headerlevel){
                        case "h1":
                            return <h1>{this.props.formJson.headertext}</h1>
                        case "h2":
                            return <h2>{this.props.formJson.headertext}</h2>
                        case "h3":
                            return <h3>{this.props.formJson.headertext}</h3>
                        case "h4":
                            return <h4>{this.props.formJson.headertext}</h4>
                        case "h5":
                            return <h5>{this.props.formJson.headertext}</h5>
                        case "h6":
                            return <h6>{this.props.formJson.headertext}</h6>
                    }
                })()}


            </div>
        );
    }
}



export default Header;