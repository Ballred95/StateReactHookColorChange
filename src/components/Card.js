import React, {Component} from 'react'

export default class Card extends Component {
    render(){
        const buttonStyle = {
            backgroundColor: 'yellow',
            padding: '10px',
            borderRadius: '15%',
            border: 'none'
        }
        return(
            <div>
                <button style={buttonStyle}>Night and Day</button>
            </div>
        )
    }
}
