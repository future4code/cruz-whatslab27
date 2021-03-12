import React from 'react'
import styled from 'styled-components'
import Background from "./whats.png";


//Variables created for styling purposes:
const Header = styled.div`
background-color: #128C7E;
width: 100%;
height: 15%;
justify-content:start;
ali
`

const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`

const FormContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items:center;
width: 100%; 
margin: 10px; 
border-radius: 10px; 
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
width: 60px;
background-color: #25D366;
color: white;
text-align:center;
border: white doble 10px;
border-radius: 10px 0;
cursor: pointer;
padding:5px;

`
//#ECE5DD
const SentMessagesContainer = styled.div`
width: 40%;
height: 95vh;
background-image: url(${Background});
padding: 10px;
display:flex;
flex-direction: column;
justify-content: flex-end;

`

const MessageBaloon = styled.p`
margin: 5px;
position:relative;
background-color: #128C7E;
border: 1px solid black;
border-radius: 10px;
padding: 10px;

`

export default class Form extends React.Component {
    //The following state and functions were created for the controlled input:

    state = {
        inputs: [],
        valorInputUser: "",
        valorInputMessage: "",
    };

    OnChangeUser = (event) => {
        this.setState({ valorInputUser: event.target.value })
    }

    OnChangeMessage = (event) => {
        this.setState({ valorInputMessage: event.target.value })
    }

    addMessageClick = () => {

        const newMessage = {
            user: this.state.valorInputUser,
            message: this.state.valorInputMessage,
        };

        const newMessages = [...this.state.inputs, newMessage];
        this.setState({ inputs: newMessages, valorInputMessage: '', valorInputUser: '' });
    };

    //Função adicionada para o Desafio 1:
    addMessageEnter = (event) => {
        if (event.key === "Enter") {
            const newMessage = {
                user: this.state.valorInputUser,
                message: this.state.valorInputMessage,
            };

            const newMessages = [...this.state.inputs, newMessage];
            this.setState({ inputs: newMessages, valorInputMessage: '', valorInputUser: '' });
        }
    };

    render() {

        //Função adicionada para o Desafio 2. Ela NÃO está funcionando corretamente, pois está deletando apenas o texto da mensagem (não a mensagem por inteiro) e não somente de uma, mas de todas as mensagens. Ainda assim, resolvemos mantê-la nesse espaço para demonstrar que ao menos parte do Desafio 2 foi realizado.
        const deleteMessage = (event) => {
            let intermediateArray = [...SentMessages]
            let newArray = intermediateArray.filter((message) => {
                console.log(event.target.value)
                return message !== event.target
            })
            this.setState({ inputs: newArray })
        }

        const SentMessages = this.state.inputs.map((message) => {
            return (

                //Adicionamos o evento "onDoubleClick" a seguir por conta do Desafio 2. Porém, como dito anteriormente, a função que ele chama NÃO está funcionando corretamente.
                <MessageBaloon onDoubleClick={deleteMessage}>{message.user}: {message.message}</MessageBaloon>
            )
        });

        return (
            <MainContainer>
                <SentMessagesContainer>{SentMessages}</SentMessagesContainer>
                <FormContainer>
                    {/* O evento "OnKeyDown" das seguintes tags for adicionado para a resolução do Desafio 1: */}
                    <InputUser 
                    onKeyDown={this.addMessageEnter} 
                    placeholder={'Name'} 
                    onChange={this.OnChangeUser} 
                    value={this.state.valorInputUser}>
                    </InputUser>
                    <InputMessage 
                    onKeyDown={this.addMessageEnter} 
                    placeholder={'Message'} 
                    onChange={this.OnChangeMessage} 
                    value={this.state.valorInputMessage}>
                    </InputMessage>
                    <SendButton onClick={this.addMessageClick}>Send</SendButton>
                </FormContainer>
            </MainContainer>
        );
    }
}