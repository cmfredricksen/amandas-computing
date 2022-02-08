<script>
	import Nav from './nav.svelte';
</script>

<header>
	<h1 class="logo">&#9884;</h1>
	<h1>Gaylord Custom Computing</h1>
	<Nav />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: var(--color-ltPurple);

		border-bottom: 3px solid var(--color-mdOrange);
	}
	h1 {
		/* text-shadow: 0 3px 3px var(--color-black); */
		color: var(--color-dkPurple2);
	}

	.logo {
		color: white;
		border: 3px solid white;
		border-radius: 3rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-dkPurple2);
	}
</style>
