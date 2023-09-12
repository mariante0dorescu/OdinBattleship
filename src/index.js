import "./styles.css";
import "./styles.scss";
import UI from './ui.js'
console.log("hello world!");

// initial content load event
document.addEventListener('DOMContentLoaded', UI.createHeader())
document.addEventListener('DOMContentLoaded', UI.createMessageBox())
document.addEventListener('DOMContentLoaded', UI.createUserNameForm())
document.addEventListener('DOMContentLoaded', UI.createGameBoardsContainer())
document.addEventListener('DOMContentLoaded', UI.createShipsContainer())
document.addEventListener('DOMContentLoaded', UI.createButtonsContainer())
document.addEventListener('DOMContentLoaded', UI.createFooter())