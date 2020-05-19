<script>
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
  import { evaluation } from '../stores/evaluation.js';
  import { currentPage } from '../stores/currentPage.js';

  onMount(() => {
    currentPage.update( currentPage => 'Your Report' );
  });
</script>

<Header>
  <HeaderSub>
    FAST Report Tool
  </HeaderSub>
  Your Report
</Header>

<p>On this page, you can set up your evaluation.</p>

<h2>About your report</h2>

<div class="field">
  <label for="evaluation-meta-name">Name of W3C specification</label>
  <input type="text" bind:value={$evaluation["meta"]["name"]["value"]} id="evaluation-meta-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<div class="field">
  <label for="evaluation-meta-name">Your name</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorName"]["value"]} id="evaluation-meta-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<div class="field">
  <label for="evaluation-meta-name">Your W3C working group</label>
  <input type="text" bind:value={$evaluation["meta"]["evaluatorOrg"]["value"]} id="evaluation-meta-name"on:change={() =>  evaluation.updateCache($evaluation)} />
</div>

<Pager label="Previous/Next Step">
  <PagerLink to="/step/1" direction="next">Step 1</PagerLink>
</Pager>
