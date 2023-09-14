export default function addPiece(player, ship){
  const allBoardBlocks = player === "computer" ? Array.from(document.querySelectorAll('#computer_gameboard div')) : Array.from(document.querySelectorAll('#player_gameboard div'))
  let randomIndex = Math.ceil(Math.random() * 100);
  let isHorizontal = Math.random() < 0.5;

  function validStart(index, length, orientation) {
  
    if(orientation) {
      if(index <= (100 - length)) {
        return index;
      } else {
        return 100 - lenght;
      }
    } else {
      if(index <= 100 - (length * 10)) {
        return index;
      } else {
        return index - ((ship.length * 10) - 10) 
      } 
    }
  }
  //let validStart = isHorizontal ? randomIndex <= 100 - ship.length ? randomIndex : 

  let shipBlocks = [];
  
  for(let i = 0; i < ship.length; i++){
    if(isHorizontal){
      shipBlocks.push(allBoardBlocks[validStart(randomIndex, ship.length, isHorizontal) + i])
    } else {
      shipBlocks.push(allBoardBlocks[validStart(randomIndex, ship.length, isHorizontal) + i * 10])
    }
  }

   // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   let valid;

  if(isHorizontal) {
    shipBlocks.every((_, index) => {
      valid = shipBlocks[0].id % 100 !== 100 - (shipBlocks.length - (index - 1))
    })
  } else{
    shipBlocks.every((_, index) => {
      valid = shipBlocks[0].id < 90 + (100 * index + 1)
    })
  }

  const notTaken = shipBlocks.every(block => !block.classList.contains('taken'))

  if(valid && notTaken) {
    shipBlocks.forEach(block => {
      block.classList.add(ship.name);
      block.classList.add('taken');
    })  
  } else{
    addPiece(player, ship)
  }


}