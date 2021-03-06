<script>
  import { navigate, Router, Link } from 'svelte-routing';
  import { evaluation } from '../stores/evaluation.js';
  import { currentPage } from '../stores/currentPage.js';
  import { importEvaluation } from '../utils/importEvaluation.js';
  import { getEvaluatedItems } from '../utils/getEvaluatedItems.js';
  import MoreInfo from './MoreInfo.svelte';

  let fresh;

  function startNew() {
    navigate('/your-report', { replace: false });
  }

  function toOverview() {
    navigate('/results', { replace: false });
  }

  function clear() {
    if (window.confirm("This will clear the current evaluation and start a new one. Are you sure that's what you'd like to do?")) {
      evaluation.clearCache();
      navigate('/', { replace: true });    
    }
  }

  evaluation.subscribe(value => {
    fresh = evaluation.isFresh();
  });

  $: fresh = evaluation.isFresh();
  $: evaluatedItems = getEvaluatedItems($evaluation);
  $: totalCriteria = Object.values($evaluation.evaluationData).filter( item => item.level && item.level.length <= $evaluation.meta.conformanceTarget.value.length).length;
</script>

<aside>
  {#if fresh && $currentPage === "Start"}
   <h2>Your Report</h2>
   <p>Welcome to the FAST Report Tool.</p>
   <button class="button" on:click={startNew}>Start new report</button>
   <input type="file" id="import-evaluation" on:change={importEvaluation} class="visuallyhidden" accept="application/json"/>
   <label for="import-evaluation" class="button button-secondary">Import report</label>
  {:else if $currentPage === "Your Report" }
  <Router>
    <h2>
      {#if $evaluation["meta"] && $evaluation["meta"]["name"] && $evaluation["meta"]["name"]["value"]}
      <small>Evaluating </small>{$evaluation["meta"]["name"]["value"]}
      {:else}
      Your Report
      {/if}
    </h2>
    <p>On this page, you can add information about your report, or start evaluating straight away in <Link to="/step/1">Step 1</Link>.</p>
  </Router>
  {:else}
    <h2>
      {#if $evaluation["meta"] && $evaluation["meta"]["name"] && $evaluation["meta"]["name"]["value"]}
      <small>Reporting on </small>{$evaluation["meta"]["name"]["value"]}
      {:else}
      Your Report
      {/if}
    </h2>
    {#if evaluatedItems && $evaluation.evaluationData}
    <p>Reported on <strong>{evaluatedItems.length}</strong> out of <strong>{totalCriteria}</strong> FAST checkpoints.</p>
    {/if}
    <button class="button" on:click={toOverview}>View report</button>
    <button class="button button-secondary" on:click={clear}>Clear</button>
  {/if}
</aside>

<style>
  aside {
    background: var(--footer-grey);box-shadow: 0px 2px 8px -7px #000;padding: 1em;border: 1px solid var(--line-grey);
    grid-column: 2 / 4;
    align-self: start;
    margin-bottom: 2em;
  }
  @media (min-width: 60em) {
    aside {
      position: sticky;
      top: 1em;
      }
  }
  h2 {
    font-weight: bold;font-size: 1em;margin: 0;
  }
  h2 small {
    display: block;font-weight: normal;color: var(--dk-blue);
  }
  .button + .button,
  .button + input + .button /* the file upload button */ {
    margin-top: .25em;
  }
  input[type="file"]:focus + label {
    outline-offset: 2px;
    outline: 2px solid transparent;
    transition: outline-offset .2s linear;
    border-color: var(--w3c-blue);
    outline-color: var(--w3c-blue);
  }
 </style>