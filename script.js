// Roock, Paper, Sessor Game

//variables for wins, losses, ties
var wins=0
var losses=0 
var ties=0

var choices = ['R','S','P']

var keepPlaying= true

while (keepPlaying){


// prompt the user to choose r,p,s 
var userChoice = prompt ('Choose R, P, or S to play?');
console.log(userChoice)


// comp randomley choose r, s, p 
var computerChoice =  choices [Math.floor(Math.random() * choices.length)]


//show comp choice to user 
alert ('Computer chose' + computerChoice) 


//check for tie
    // it's a tie
    //increment ties
if (userChoice === computerChoice) {
    ties += 1  // OR ties ++ if only 1 time

}
    //check winning conditions
    //u chose r, comp chose s
    //u chose p, comp chose r
    //u chose s, comp p
        // incrementlosses
   else if (userChoice === 'S' && computerChoice === 'P' ||
           userChoice === 'R' && computerChoice === 'S' ||
           userChoice === 'P' && computerChoice === 'R')
        {
            wins++
        }

// lose
    //increment losses
    else {
            losses++
        }

    console.log(wins, ties, losses)


////display stats
    alert('Wins: ' + wins + '\nTies: ' + ties + '\nLosses:' + losses)

//confirm play agin //repeat
    var playAgain= confirm ('Wants to play again?')
    if (!playAgain){
        keepPlaying = false

    }
}

alert('Thank you for playing!')