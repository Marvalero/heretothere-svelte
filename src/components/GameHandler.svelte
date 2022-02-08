<script>
    import {guess, level, display} from '../stores/hereToThereStore.js';

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
</script>

<div class="controller-wrapper">
    <button class="btn-primary" on:click={spinLevel}>Spin</button>
    <button class="btn-rounded" on:click={decreaseGuess}>-1</button>
    <button class="btn-rounded" on:click={increaseGuess}>+1</button>
    <button class="btn-primary" on:click={toggleDisplay}>Peak</button>
</div>

<style>
    .controller-wrapper {
        width: 2.5vw;
        height: 2.5vw;
        right: 1.6vw;
        top: 1.2vw;
    }
</style>