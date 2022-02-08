<script>
    import HereToThere from './pages/HereToThere.svelte';
    import SecretHitler from './secretHitler/SecretHitlerPage.svelte';
    import {Router, Route, Link} from "svelte-routing";
    import Home from "./Home.svelte";

    export let url = ""; //This property is necessary declare to avoid ignore the Router
    export let name;
</script>

<main>
    <Router url="{url}">
        <nav>
            <div class="link">
                <Link to="/">Home</Link>
            </div>
            <div class="link">
                <Link to="here-to-there">Here to There</Link>
            </div>
            <div class="link">
                <Link to="secret-hitler">Secret Hitler</Link>
            </div>
        </nav>
        <div>
            <Route path="here-to-there" component="{HereToThere}"/>
            <Route path="secret-hitler" component="{SecretHitler}"/>
            <Route path="/">
                <Home/>
            </Route>
        </div>
    </Router>
</main>

<style>
    nav {
        display: flex;
    }
    .link {
        width: 100px;
        background: pink;
        padding: 10px;
        margin: 10px;

    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>