import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import styled from "styled-components";

const AppContainer = styled.div`
  flex-direction: column;
  max-width: 600px;
  border: 1px solid black;
  height: 100vh;
  flex: 1;
  display: flex;
  
`

const MessagesContainer = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`

const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {

  addMessage = () => {

    const newpost = {
      nome: this.state.valorInputUser,
      email: this.state.valorInputMessage,

    };

    const newPosts = [...this.state.inputs, newpost];
    this.setState({ inputs: newPosts });
  };

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.inputs.map((message) =>
              <p><BoldText>{message.inputUser} </BoldText>{': ' + message.inputMessage}</p>)
          }
        </MessagesContainer>
        <Form addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;