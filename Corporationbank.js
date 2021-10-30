import React, { Component } from 'react'

export class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corportion bank for {this.props.info.lastname}</h1>
            </div>
        )
    }
}

export default Corporationbank

