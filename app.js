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

