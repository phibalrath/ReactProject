//Page 1: Take name input and save to use for next page

import React from 'react'

class Name extends React.Component {
    constructor() {
        super()
        this.state = {
            names: [],
            playerOneName: '',
            playerTwoName: '',
        }
    }

    handleNameInput = (event) => {
        this.setState({playerOneName:event.target.value})
    }

    handleNameInputTwo = (event) => {
        this.setState({playerTwoName:event.target.value})
    }

    handleClick = () => {
        let nameObject = {playerOneName:this.state.playerOneName, playerTwoName:this.state.playerTwoName}
        this.setState({names: [...this.state.names, nameObject], playerOneName:'', playerTwoName:''})
        
    }

    render() {
        let nameArr = this.state.names.map((name, index) => {
            return(
                <div key={index}>
                    <div> Player 1 Name: {name.playerOneName}</div>
                    <div>Player 2 Name: {name.playerTwoName}</div>
                </div>
            )
        })
        
        return (
            <div>
                <h4>Player Names</h4>

                <input id="playerOne" placeholder="Player 1 Name" value={this.state.playerOneName} onChange={this.handleNameInput} />
                <input id="playerTwo" placeholder="Player 2 Name" value={this.state.playerTwoName} onChange={this.handleNameInputTwo} />
                <button onClick = {this.handleClick}>OK</button>
                
                {nameArr}
                
                

            </div>
           
        )
    }
}

export default Name;