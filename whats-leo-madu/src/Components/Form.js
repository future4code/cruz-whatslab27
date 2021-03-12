import React from 'react'
import styled from 'styled-components'

//Variables created for styling purposes:

const FormContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
align-items:center;
`

const User = styled.input`
width: 20px;
margin: 5px;
`

const Message = styled.input`
width: 100px;
margin: 5px;
`

const SendButton = styled.p`
width: 20px;
background-color: black;
color: white;
text-align:center;
`

export default class Form extends React.Component {
    //The following state and functions were created for the controlled input:

    state = {

        inputs: [
            {
                inputUser: "",
                inputMessage: ""
            },

        ],

        valorInputUser: "",
        valorInputMessage: "",
    };

    OnChangeUser = (event) => {
        this.setState({ inputUser: event.target.value })
    }

    OnChangeMessage = (event) => {
        this.setState({ inputMessage: event.target.value })
    }

    render() {
        return <FormContainer>
            <User onChange={this.OnChangeUser} value={this.state.inputUser}></User>
            <Message onChange={this.OnChangeMessage} value={this.state.inputMessage}></Message>
            <SendButton>Send</SendButton>
        </FormContainer>
    }
}