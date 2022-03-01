import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardsList: [],
    };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  // event handler genérico - atualiza o estado de todos os componentes com a mesma lógica
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validate());
  }

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  // Clicking on a "Submit" button, prevent it from submitting a form
  // https://www.w3schools.com/jsref/event_preventdefault.asp

  onSaveButtonClick = (event) => {
    event.preventDefault();
    // pega os estados
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    // guarda numa constante
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // método da aula ao vivo 11.2 (23m)
    // altera os valores do estado anterior
    this.setState((prevState) => ({ cardsList: [...prevState.cardsList, newCard] }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }, () => this.validateTrunfo());
  }

  validate = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const fields = [cardName, cardDescription, cardImage, cardRare];
    const noEmptyFields = fields.every((element) => element !== '');

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const sumMax = 210;
    const max = 90;

    const sumOfAttr = ((attr1 + attr2 + attr3) <= sumMax);

    const checkAttr1 = attr1 >= 0 && attr1 <= max;
    const checkAttr2 = attr2 >= 0 && attr2 <= max;
    const checkAttr3 = attr3 >= 0 && attr3 <= max;

    if (noEmptyFields && sumOfAttr && checkAttr1 && checkAttr2 && checkAttr3) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  validateTrunfo = () => {
    const { cardsList } = this.state;
    const thereIsTrunfo = cardsList.some((element) => element.cardTrunfo === true);
    this.setState({ hasTrunfo: thereIsTrunfo });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
