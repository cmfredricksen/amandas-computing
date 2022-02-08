<script>
	export let link;
	export let text;
</script>

<div class="btn">
	{#if (link, text)}
		<a href={link}> {text}</a>
	{/if}
</div>

<style>
	a {
		text-decoration: none;
		background-color: var(--color-mdOrange);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin: 2rem 1rem;
		border: 2px solid var(--color-dkOrange);
		color: var(--color-dkPurple2);
		font-weight: bold;
	}
	a:hover {
		color: white;
	}
</style>
