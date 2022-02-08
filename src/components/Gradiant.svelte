<script>
    import {guess, level, display} from '../stores/hereToThereStore.js';

    import {Motion} from 'svelte-motion';

    let guessValue;
    let levelValue;
    let displayValue;
    guess.subscribe(value => {
        guessValue = value;
    });
    level.subscribe(value => {
        levelValue = value;
    });
    display.subscribe(value => {
        displayValue = value;
    });
    $: levelRotation = 90 * levelValue / 100;
    $: guessRotation = 90 * guessValue / 100;
</script>

<Motion animate={{ rotate: guessRotation }} transition={{ duration: .5 }} let:motion>
    <div use:motion class="dial-conainer"/>
</Motion>

{#if displayValue}
    <Motion animate={{ rotate: levelRotation }} transition={{ duration: 0 }} let:motion>
        <div use:motion class="gradient-container"/>
    </Motion>
{:else}
    <div class="screen-container"/>
{/if}


<style>
    .dial-conainer {
        background: url("/images/wheelDial.png") center center no-repeat !important;
        background-size: 100% auto;
        width: 800px;
        height: 800px;
        z-index: 50;
        position: absolute;
    }

    .gradient-container {
        background-image: url("/images/wheelBGnum.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        z-index: 10;
        width: 800px;
        height: 800px;
        position: absolute;
    }

    .screen-container {
        background-image: url("/images/wheelScreen.png");
        background-repeat: no-repeat;
        background-size: 100% auto;
        width: 800px;
        height: 400px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        z-index: 10;
    }
</style>