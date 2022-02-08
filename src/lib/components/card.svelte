<script>
	export let title;
	export let lista;
	export let listb;
	export let listc;
	export let icon;
	export let text;
</script>

<div class="card">
	<i class="material-icons-outlined"><h2>{icon}</h2></i>
	<div class="title"><h1>{title}</h1></div>
	<ul class="list">
		{#if lista}
			<li>{lista}</li>
		{/if}
		{#if listb}
			<li>{listb}</li>
		{/if}
		{#if listc}
			<li>{listc}</li>
		{/if}
	</ul>
	{#if text}
		<p>{text}</p>
	{/if}
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		padding: 1rem 2rem;
		background-color: var(--color-dkPurple3);
		height: 100%;
	}
	h2 {
		text-align: center;
		margin: 1.5rem;
	}

	.title {
		text-align: center;
	}
	li {
		list-style: none;
		text-align: center;
		margin: 0.5rem 0;
		font-size: 1.25rem;
	}

	p {
		margin: 1.25rem;
		text-align: center;
	}
</style>
