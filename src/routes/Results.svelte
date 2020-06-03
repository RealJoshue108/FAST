<script>
  import { onMount } from 'svelte';
  import marked from 'marked';
  import Header from '../components/Header.svelte';
  import HeaderSub from '../components/HeaderSub.svelte';
  import { evaluation } from '../stores/evaluation.js';
  import { currentPage } from '../stores/currentPage.js';

  function createDownload(evaluation) {
    let blob = new Blob([JSON.stringify(evaluation)]);
    return url
  }

  onMount(() => {
    currentPage.update( currentPage => 'Results' );
  });

  $: jsonDownload = `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify($evaluation))}`;
</script>

<Header>
  <HeaderSub>FAST Report Tool</HeaderSub>
  Results
</Header>
<p>Thanks for using this tool. Your FAST evaluation is displayed in full below.</p>
<p><a href={jsonDownload} download="report.json" class="button button-secondary">Download FAST evaluation (JSON)</a></p>
<dl>
  {#if $evaluation["meta"]["name"]["value"]}
  <dt>Name</dt>
  <dd>{$evaluation["meta"]["name"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["evaluatorName"]["value"]}
  <dt>Evaluator</dt>
  <dd>{$evaluation["meta"]["evaluatorName"]["value"]}</dd>
  {/if}
  {#if $evaluation["meta"]["evaluatorOrg"]["value"]}
  <dt>Organisation</dt>
  <dd>{$evaluation["meta"]["evaluatorOrg"]["value"]}</dd>
  {/if}
</dl>
<table>
	<thead>
		<tr>
			<th>Check point</th>
			<th>Result</th>
			<th>Observations</th>
		</tr>
	</thead>
	<tbody>
	{#each Object.values($evaluation.evaluationData) as result}
	<tr>
		<td id={`criterion-${result.num}`}>{result.num}: {result.handle}</td>
		<td id={`result-${result.num}`}>{result.result ? result.result : 'No result'}</td>
		<td id={`observation-${result.num}`}>
      {#if result.observations}
        {@html marked(result.observations)}
      {:else}
        No observations
      {/if}
    </td>
	</tr>
	{/each}
	</tbody>
</table>
