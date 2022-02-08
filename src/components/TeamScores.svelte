<script>
    export let name;
    export let score;
    const decreaseScore = () => {
        score = score - 1;
    }
    const increaseScore = () => {
        score = score + 1;
    }
</script>

<div class="teams-scores-wrapper">
    <h3>Team {name}</h3>
    <p>{score}</p>
    <button class="btn-rounded" on:click={decreaseScore}>-</button>
    <button class="btn-rounded" on:click={increaseScore}>+</button>
</div>

<style>
    .teams-scores-wrapper {
        width: 80px;
        display: block;
    }
</style>