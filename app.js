function getComputerChoice()
{
    const num = getRandomInt(3);
    return num;
}

function playRound(compSelect, playSelect)
{
    if (compSelect === 1)
    {
        if (playSelect === 2)
        {
            return "You WIN!";
        }
        if (playSelect === 3)
        {
            return "You Lose!";
        }
        if (playSelect === 1)
        {
            return "Tie!";
        }
    }
    if (compSelect === 2)
    {
        if (playSelect === 2)
        {
            return "Tie!";
        }
        if (playSelect === 3)
        {
            return "You WIN!";
        }
        if (playSelect === 1)
        {
            return "You LOSE!";
        }
    }
    if (compSelect === 3)
    {
        if (playSelect === 2)
        {
            return "You LOSE!";
        }
        if (playSelect === 3)
        {
            return "Tie!";
        }
        if (playSelect === 1)
        {
            return "You WIN!";
        }
    }
}

function game()
{
    for (let i = 0; i < 5; i++)
    {
        let ab = prompt("Rock? Paper? or Scissor");
        let ch = ab.toLowerCase();
        let playSelect = 0;
        if (ch == "rock")
        {
            playSelect = 1;
        }
        else if(ch == "paper")
        {
            playSelect = 2;
        }
        else
        {
            playSelect = 3;
        }
        compSelect = getComputerChoice();
        const result = playRound(compSelect, playSelect);
        console.log(result);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


game();