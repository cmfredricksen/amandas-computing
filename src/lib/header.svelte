<script>
	import Nav from './nav.svelte';
</script>

<header>
	<a href="/">
		<h1 class="logo">&#9884;</h1>
	</a>
	<a href="/">
		<h1 class="title">Gaylord Custom Computing</h1>
	</a>
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
		color: var(--color-dkPurple2);
	}

	.title:hover {
		color: white;
	}

	.logo {
		color: white;
		border: 3px solid white;
		border-radius: 3rem;
		padding: 0.5rem 1rem;
		background-color: var(--color-dkPurple2);
	}
	.logo:hover {
		background-color: var(--color-mdOrange);
		color: var(--color-dkPurple2);
	}
	a {
		text-decoration: none;
	}

	@media (max-width: 968px) {
		header {
			flex-direction: column;
			padding: 1rem 0 2rem;
		}
		.title {
			margin: 0.75rem 0;
			text-align: center;
			margin-bottom: 2rem;
		}
	}
</style>
