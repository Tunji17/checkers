/**
 * Implements the game logic 
 * @param {Array} checkersBoard A 2d Array with one X on each row and a single row containing O
 * @param {Object} jafarData An object containing the row and column position of the single O
 * @returns {Number} Counter which is the number of X's the O is able to step over following the rules of checkers.
 */
const checkersLogic = (checkersBoard, jafarData) => {
  let counter = 0;
  console.log('initial jafar data',jafarData);
  if(jafarData.RowPosition - 1 <= 0) {
    return counter;
  }
    if (
      checkersBoard[jafarData.RowPosition - 1][jafarData.ColumnPosition - 1] === 'X' &&
      checkersBoard[jafarData.RowPosition - 2][jafarData.ColumnPosition - 2] === '.'
    ) {
      while (jafarData.RowPosition > 1){
        jafarData.RowPosition = jafarData.RowPosition - 2
        jafarData.ColumnPosition = jafarData.ColumnPosition - 2   
        counter += 1
      };
      return counter;
    }
    if (
      checkersBoard[jafarData.RowPosition - 1][jafarData.ColumnPosition + 1] === 'X' &&
      checkersBoard[jafarData.RowPosition - 2][jafarData.ColumnPosition + 2] === '.'
    ) {
      while (jafarData.RowPosition > 1){
        jafarData.RowPosition = jafarData.RowPosition - 2
        jafarData.ColumnPosition = jafarData.ColumnPosition + 2
        counter += 1
      };
      return counter;
    }
    if (
      checkersBoard[jafarData.RowPosition - 1][jafarData.ColumnPosition - 1] !== 'X' &&
      checkersBoard[jafarData.RowPosition - 1][jafarData.ColumnPosition + 1] !== 'X'
    ) {
      return counter;
    }
    console.error('Board out of range')
    return counter;

};

/**
 * Creates an array of size length*length and populates 
 * it with one X on each row and a single row containing O
 * @param {Nimber} length size of the array and number of characters in the row string
 * @returns {Number} numberOfAladdinKills which is the number of X's the O is able to step over following the rules of checkers.
 */

const checkers = (length) => {
  if (length < 4 || length > 30) {
    console.error('You should supply a length between 4 and 30 ')
    return;
  }
  const dotArray = []
  for (let i=0; i< length; i++) {
  const dotString ='.'.repeat(length-1)
  dotArray.push(dotString);
  }
  const randomDigit = Math.floor(Math.random() * (length-1 - 0 + 1)) + 0;
  let jafarRandomRow = dotArray[randomDigit];
  const jafarRandomPosition = Math.floor(Math.random() * (jafarRandomRow.length + 1));
  jafarRandomRow = jafarRandomRow.substr(0, jafarRandomPosition) + 'O' + jafarRandomRow.substr(jafarRandomPosition);
  dotArray.splice(randomDigit, 1, jafarRandomRow);  
  console.log('row number', randomDigit);
  console.log('column position', jafarRandomPosition);

  const checkersArray = dotArray.map((string) => {
  if (string.indexOf('O') > -1) {
    return string;
  } else {
    const randomPosition = Math.floor(Math.random() * (string.length + 1));
    string = string.substr(0, randomPosition) + 'X' + string.substr(randomPosition);
    return string;
  }
  });
  const jafarData = {
    RowPosition: randomDigit,
    ColumnPosition: jafarRandomPosition,
  };
  const numberOfAladdinKills = checkersLogic(checkersArray, jafarData );
  console.log(`Number of kills is ${numberOfAladdinKills}`);
  console.log(checkersArray);
  return 
};
checkers(2);
checkers(60);
checkers(7);
checkers(10);
checkers(20);

