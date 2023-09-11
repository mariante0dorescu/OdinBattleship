export default class UI {
  static createHeader(){
    console.log('creating header')
  }

  static createUserNameForm(){
    console.log('creating user name form')
  }

  static createMessageBox(){
    console.log('creating message box')
  }

  static createGameBoardsContainer(){
    const container = document.querySelector('.container');
    console.log(container)
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

  static createFooter() {
    console.log('creating footer')
  }


}