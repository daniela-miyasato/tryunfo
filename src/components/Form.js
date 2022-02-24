import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="formStyle">

          <label htmlFor="name">
            Nome
            <input
              id="name"
              data-testid="name-input"
              type="text"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <input
              id="description"
              data-testid="description-input"
              type="textarea"
            />
          </label>

          <label htmlFor="attr1">
            Atributo 1
            <input
              id="attr1"
              data-testid="attr1-input"
              type="number"
            />
          </label>

          <label htmlFor="attr2">
            Atributo 2
            <input
              id="attr2"
              data-testid="attr2-input"
              type="number"
            />
          </label>

          <label htmlFor="attr3">
            Atributo 3
            <input
              id="attr3"
              data-testid="attr3-input"
              type="number"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              id="image"
              data-testid="image-input"
              type="text"
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              id="rare"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            Super Trybe Trunfo
            <input
              id="checkbox"
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>

          <button
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
