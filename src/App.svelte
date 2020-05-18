<script>
  import { Router, Route } from "svelte-routing";
  import Start from "./routes/Start.svelte";
  import YourReport from './routes/YourReport.svelte';
  import EvaluationInfo from './components/EvaluationInfo.svelte';
  import Results from "./routes/Results.svelte";
  import Principle from './components/Principle.svelte';
  import Progress from './components/Progress.svelte';
  import ProgressItem from './components/ProgressItem.svelte';
  import new_fast from './data/new_fast.js';
  export let url = "";
</script>

<Progress>
  <Router>
    <ProgressItem to="/">Start</ProgressItem>
    <ProgressItem to="/your-report">Your Report</ProgressItem>
    {#each new_fast as { principle, guidelines }, i }
    <ProgressItem to="step/{i+1}">{principle.num}<span class="visuallyhidden">: {principle.handle}</span></ProgressItem>
    {/each}
    <ProgressItem to="/results">Results</ProgressItem>
  </Router>
</Progress>
<EvaluationInfo></EvaluationInfo>
<section aria-label="Main content">
  <Router url={url}>
    <Route path="/">
      <Start />
    </Route>
    <Route path="/your-report">
      <YourReport />
    </Route>
    <Route path="/step/:id" let:params>
      <Principle id="{params.id-1}" />
    </Route>
    <Route path="/results">
      <Results />
    </Route>
  </Router>
</section>

<style>
  section {
    grid-column: content-start / content-end;
  }
</style>
