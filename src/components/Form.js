import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form className="formStyle">
          <label htmlFor="name">
            Nome
            <input
              id="name"
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              id="description"
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Atributo 1
            <input
              id="attr1"
              name="cardAttr1"
              data-testid="attr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            Atributo 2
            <input
              id="attr2"
              name="cardAttr2"
              data-testid="attr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            Atributo 3
            <input
              id="attr3"
              name="cardAttr3"
              data-testid="attr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              id="image"
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="cardTrunfo">
                  Super Trybe Trunfo
                  <input
                    id="cardTrunfo"
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    type="checkbox"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>)
          }

          <button
            data-testid="save-button"
            type="submit"
            name="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
