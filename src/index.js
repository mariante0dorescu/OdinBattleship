import "./styles.css";
import "./styles.scss";
import Ship from './Ship';
import UI from './ui.js'
import addPiece from './addPiece.js'


// initial content load event
document.addEventListener('DOMContentLoaded', UI.createHeader())
document.addEventListener('DOMContentLoaded', UI.createMessageBox())
document.addEventListener('DOMContentLoaded', UI.createUserNameForm())
document.addEventListener('DOMContentLoaded', UI.createGameBoardsContainer())
document.addEventListener('DOMContentLoaded', UI.createShipsContainer())
document.addEventListener('DOMContentLoaded', UI.createButtonsContainer())
document.addEventListener('DOMContentLoaded', UI.createFooter())



const destroyer = new Ship('destroyer', 2)
const submarine = new Ship('submarine', 3)
const cruiser = new Ship('cruiser', 4)
const battleship = new Ship('battleship', 5)

const ships = [destroyer, submarine, cruiser,battleship];


ships.forEach(ship => addPiece('computer',ship));