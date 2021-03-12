import React from 'react'
import styled from 'styled-components'

//Variables created for styling purposes:

const MainContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #075E54;
display:flex;
flex-direction:column;
align-items: center;
`

const FormContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items:center;
/* width: 90%; */
/* background-color: white; */
/* margin: 10px; */
/* border: black solid 1px;
border-radius: 10px; */
`

const InputUser = styled.input`
width: 20%;
margin: 5px;
padding:5px;
border-radius: 10px;
`

const InputMessage = styled.input`
width: 60%;
margin: 5px;
padding:5px;
border-radius: 10px;
`

const SendButton = styled.p`
width: 70px;
background-color: #25D366;
color: white;
text-align:center;
border: white doble 10px;
border-radius: 10px 0;
cursor: pointer;
padding:5px;
`

const SentMessagesContainer = styled.div`
width: 60%;
height: 85vh;
background-color: #ECE5DD;
padding: 10px;
display:flex;
flex-direction: column;
justify-content: flex-end;
`

const MessageBaloon = styled.p`
margin: 5px;
position:relative;
background-color: aqua;
border: 1px solid black;
border-radius: 10px;
padding: 10px;
`

export default class Form extends React.Component {
    //The following state and functions were created for the controlled input:

    state = {

        inputs: [
            // {
            //     inputUser: "",
            //     inputMessage: ""
            // },

        ],

        valorInputUser: "",
        valorInputMessage: "",
    };

    OnChangeUser = (event) => {
        this.setState({ valorInputUser: event.target.value })
    }

    OnChangeMessage = (event) => {
        this.setState({ valorInputMessage: event.target.value })
    }

    addMessage = () => {

        const newMessage = {
            user: this.state.valorInputUser,
            message: this.state.valorInputMessage,
        };

        const newMessages = [...this.state.inputs, newMessage];
        this.setState({ inputs: newMessages, valorInputMessage: '', valorInputUser: '' });
    };

    render() {

        const SentMessages = this.state.inputs.map((message) => {
            if(message.user==="eu"){
            return (
                <MessageBaloon >
                </MessageBaloon>
            )} else{
                return(
                <MessageBaloon>{message.user}: {message.message}</MessageBaloon>
                )
            }
        });
        return (
            <MainContainer>
                <SentMessagesContainer>{SentMessages}</SentMessagesContainer>
                <FormContainer>
                    <InputUser placeholder={'Name'} onChange={this.OnChangeUser} value={this.state.valorInputUser}></InputUser>
                    <InputMessage placeholder={'Message'} onChange={this.OnChangeMessage} value={this.state.valorInputMessage}></InputMessage>
                    <SendButton onClick={this.addMessage}>Send</SendButton>
                </FormContainer>
            </MainContainer>
        );
    }
}