import React, { Component } from "react"

export default class InteractiveButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'Day',
            color: "yellow"
        }

        this.handleButtonClick = this.handleButtonClick.bind(this)
    }

    handleButtonClick() {
        console.log(this.state)
        this.setState({ color: "blue", text: 'Night'})
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handleButtonClick} 
                    style={{backgroundColor: this.state.color}}
                >{this.state.text}</button>
            </div>
        )
    }
}