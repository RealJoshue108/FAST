<script>
  import ExpandCollapseAll from '../components/ExpandCollapseAll.svelte';
  import Header from '../components/Header.svelte';
  import Pager from '../components/Pager.svelte';
  import PagerLink from '../components/PagerLink.svelte';
</script>

<Header>FAST Report Tool</Header>

<aside class="box">
  <header class="box-h ">About</header>
  <div class="box-i">
<p>This is a draft checklist to support <a href="/">Framework for Accessibility in the Specification of Technologies (FAST)</a> prepared by the <a href="http://www.w3.org/WAI/APA/">Accessible Platform Architectures Working Group</a>. The goal of <abbr title="Framework for Accessibility in the Specification of Technologies">FAST</abbr> is to describe the features that web technologies should provide to ensure it is possible to create content that is accessible to users with disabilities.
  </div>
</aside>

<p>The full framework references an analysis of user requirements, describes how technologies, content authoring, and user agents work together to meet these needs, and provides comprehensive guidance to technology developers. This checklist extracts that information at a high level to aid in self-review of technologies. Specification developers can use this to help ensure the technology will address features likely to be raised during horizontal review from accessibility proponents.</p>

	<p>Web technologies address a variety of needs, and play a variety of roles in web accessibility. Content languages describe primary content, styling languages impact presentation, APIs enable manipulation and data interchange, and protocols tie it all together. Each of these types of technologies can impact accessibility. </p>

<ExpandCollapseAll />

<details>
	<summary><h2>Structure of this FAST reporting tool</h2></summary>
		<p>This checklist is organized by types of features that a technology may provide. If the technology provides such a feature, the checklist items under the heading are applicable and should be examined. If the technology does not provide such a feature, the checklist items under the heading are not applicable and can be passed over.</p>
</details>

<details>
	<summary><h2>Legend of results</h2></summary>
	<p>As you go through and evaluate your tool, you will select a "result" for each criterion. Here is the legend of what those selections mean:</p>
	<dl>
		<dt>Done</dt>
		<dd>Your specification meets this checkpoint.</dd>
		<dt>Not done</dt>
		<dd>This is relevant to your specification but has not been done. </dd>
		<dt>In progress</dt>
		<dd>This is a work in progress.</dd>
		<dt>Not applicable</dt>
		<dd>This checkpoint relates to a feature your specification does not have, it does not apply.</dd>
	
	</dl>
</details>

<details>
	<summary><h2>Tips for using this tool</h2></summary>
	<ul>
		<li>Remember to always save the information that you enter because it is not stored on a server.</li>
		<li>More information on each FAST Checkpoint is in <a href="https://w3c.github.io/apa/fast/" target="_blank" title="FAST Editors draft - opens in new tab">Framework for Accessible Specification of Technologies (FAST) W3C Editor's Draft</a>.</li>
		<li>You can go back and forth between the steps in any order. None of the fields are required.</li>
		<li>The tool provides your report as HTML (web page) and as JSON (structured data).</li>
	</ul>
</details>

<Pager label="Previous/Next Step">
  <PagerLink to="/your-report" direction="next">Your Report</PagerLink>
</Pager>
