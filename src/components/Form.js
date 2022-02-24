import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="formStyle">

          <label>
            Nome
            <input
              data-testid="name-input"
              type="text"
            />
          </label>

          <label>
            Descrição
            <input
              data-testid="description-input"
              type="textarea"
            />
          </label>

          <label>
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
            />
          </label>

          <label>
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
            />
          </label>

          <label>
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
            />
          </label>

          <label>
            Imagem
            <input
              data-testid="image-input"
              type="text"
            />
          </label>

          <label>
            Raridade
            <select
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label>
            Super Trybe Trunfo
            <input
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
