const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      return 'Invalid input!';
    }
  }
  const getComputerChoice = () => {
    const computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0) {
      return 'rock';
    } else if(computerChoice === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  const determinerWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
      return 'User Wins!';
    }
    if(userChoice === computerChoice) {
      return 'Draw!';
    } if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'Computer Wins!';
        } else {
          return 'User Wins!';
        }
    } if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
          return 'Computer Wins!';
        } else {
          return 'User Wins!';
        }
    } if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
          return 'Computer Wins!';
        } else {
          return 'User Wins!';
        }
    }
  }
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determinerWinner(userChoice, computerChoice));
  }
  playGame();