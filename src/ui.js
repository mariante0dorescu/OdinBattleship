import Ship from './Ship'

export default class UI {
  static createHeader(){
    const container = document.querySelector('.container');
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header')
    headerDiv.innerHTML = '<h1>BATTLESHIPS</h1>'
    container.append(headerDiv);
  }

  static createUserNameForm(){
    const container = document.querySelector('.container');
    const formDiv = document.createElement('div');
    formDiv.classList.add('username-form');
    formDiv.innerHTML = `
    <form novalidate action="#" >
      <h2>Enter your player name:</h2>
        <ul>
          <li>
            <input type="text" name="uname" id="uname">
            <span class="error" aria-live="polite"></span>
          </li>
          <li>
            <button>Play</button>
          </li>
        </ul>
    </form>
      `
      container.append(formDiv);
  }

  static createMessageBox(){
    const container = document.querySelector('.container');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('messages')
    container.append(messageDiv);
  }

  static createGameBoardsContainer(){
    const container = document.querySelector('.container');
    const gameboards = document.createElement('div');
    gameboards.classList.add('gameboards');
    gameboards.appendChild(this.createGameboard('user'))
    gameboards.appendChild(this.createGameboard('computer'))
    container.appendChild(gameboards)
  }

  static createGameboard(player){    
    const gameboard = document.createElement('div');
    gameboard.classList.add(`gameboard`);
    gameboard.id = `${player}_gameboard`;

    for(let i = 0; i < 100; i++){
      const block = document.createElement('div');
      block.classList.add('block');
      block.id = i;
      gameboard.append(block);
    }

    return gameboard;
  }

  static createShipsContainer(){
    const container = document.querySelector('.container');

    const shipsContainer = document.createElement('div');
    shipsContainer.setAttribute('class', 'ships')

    const ships = [{name: 'destroyer', length: 2}, {name: 'submarine', length: 3 }, {name: 'cruiser', length: 4}, {name: 'battleship', length: 5}];

    for (const ship of ships) {
      const shipDiv = document.createElement('div');
      shipDiv.classList.add(ship.name);
      shipDiv.style.width = `${ship.length * 20}px`;
      shipDiv.setAttribute('draggable', 'true')
      shipsContainer.append(shipDiv);
    }
    
    container.appendChild(shipsContainer);
  }

  static createButtonsContainer(){
    const container = document.querySelector('.container');
    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'buttons')
    buttonsContainer.append(this.createButton('flip-button', 'FLIP'))
    buttonsContainer.append(this.createButton('start-button', 'START'))
    container.append(buttonsContainer)
  }

  static createButton(id, text) {
    const button = document.createElement('button');
    button.id = id;
    button.innerText = text;
    return button;
  }

  static createFooter() {
    console.log('creating footer')
  }


}