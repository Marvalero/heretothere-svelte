<script>
    import {guess, level, display} from '../stores/hereToThereStore.js';

    let choosenCard = {first: "good game", second: "bad game"};
    let cardList = [
        {first: "old", second: "modern"},
        {first: "cheating", second: "not cheating"},
        {first: "love", second: "hate"},
        {first: "you can pet", second: "you cannot pet"},
    ];

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const decreaseGuess = () => {
        guess.update(n => n > -100 ? n - 5 : n);
    }
    const increaseGuess = () => {
        guess.update(n => n < 100 ? n + 5 : n);
    }
    const toggleDisplay = () => {
        display.update(d => !d);
    }
    const spinLevel = () => {
        level.update(l => getRandomInt(200) - 100);
    }
    const newCards = () => {
        choosenCard = cardList[Math.floor(Math.random()*cardList.length)]
    }
</script>

<div class="game-wrapper">
    <div class="controller-wrapper">
        <button class="btn-primary" on:click={spinLevel}>Spin</button>
        <button class="btn-rounded" on:click={decreaseGuess}>-1</button>
        <button class="btn-rounded" on:click={increaseGuess}>+1</button>
        <button class="btn-primary" on:click={toggleDisplay}>Peak</button>
    </div>
    <div class="cards-wrapper">
        <div class="button-wrapper">
            <button class="btn-primary" on:click={newCards}>New Cards</button>
        </div>
        <div class="cards-list-wrapper">
            <p class="card" >{choosenCard.first}</p>
            <p class="card" >{choosenCard.second}</p>
        </div>
    </div>
</div>

<style>
    .card {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
        background: pink;
        height: 60px;
        width: 90px;
        padding: 5px;
        margin: 40px;
    }
    .button-wrapper {
        display: flex;
        justify-content: center;
    }
    .cards-list-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }
    .game-wrapper {
        z-index: 100;
        flex-basis: auto;
        width: 100%;
        background: antiquewhite;
        padding: 40px;
    }
    .controller-wrapper {
        z-index: 100;
    }

    .cards-wrapper {
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>