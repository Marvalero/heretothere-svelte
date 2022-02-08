<script>
    import TeamScores from "../components/TeamScores.svelte";
    import Gradiant from "../components/Gradiant.svelte";
    import GameHandler from "../components/GameHandler.svelte";
</script>
<div class="here-to-there-wrapper">
    <h1>Here To There</h1>
    <div class="team-score-list-wrapper">
        <TeamScores name="A" score={0}></TeamScores>
        <TeamScores name="B" score={0}></TeamScores>
    </div>
    <div class="gradiant-wrapper">
        <Gradiant></Gradiant>
    </div>
    <div class="game-handler-wrapper">
        <GameHandler></GameHandler>
    </div>
</div>
<style>
    .here-to-there-wrapper {
        background: antiquewhite;
    }
    .team-score-list-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .gradiant-wrapper {
        display: flex;
        justify-content: center;
        height:400px;
    }
    .game-handler-wrapper {
        height:400px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>