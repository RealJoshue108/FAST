<script>

  import Header from './Header.svelte';
  import HeaderSub from './HeaderSub.svelte';
  import Guideline from './Guideline.svelte';
  import Pager from './Pager.svelte';
  import PagerLink from './PagerLink.svelte';
  import new_fast from '../data/new_fast.js';
  export let id = null;
  export let className = undefined;

  $: principle = new_fast[id].principle || null;
  $: guidelines = new_fast[id].guidelines || null;

  const normalisedPrincipleId = new_fast[id].principle.num.replace(/\./g, '').toLowerCase();
  const linkToPrinciple = `https://w3c.github.io/apa/fast/#${normalisedPrincipleId}`;
</script>

<div class={className}>
  <Header>
    <HeaderSub>
      FAST Report Tool (<span class="visuallyhidden">Step </span>{id+1}<span aria-hidden="true">/</span><span class="visuallyhidden"> of </span>8)
    </HeaderSub>
    {principle.handle}
  </Header>

  <p>More details: <a href={linkToPrinciple} target="_blank" rel="noopener roreferrer">{principle.num} {principle.text}</a></p>
  
  {#each guidelines as guideline }
  <Guideline {...guideline} />
  {/each}

  <Pager label="Previous/Next Step">
    {#if id === 0}
    <PagerLink to={"/your-report"} direction="previous">Your Report</PagerLink>
    {/if}
    {#if id > 0 && id < new_fast.length }
    <PagerLink to={`/step/${id}`} direction="previous">
      {`${new_fast[id-1].principle.handle}`}
    </PagerLink>
    {/if}
    {#if (id + 1) < new_fast.length }
    <PagerLink to={`/step/${id+2}`} direction="next">
      {`${new_fast[id+1].principle.handle}`}
    </PagerLink>
    {/if}
    {#if (id + 1) === new_fast.length }
    <PagerLink to={"/results"} direction="next">View results</PagerLink>
    {/if}
  </Pager>
</div>
