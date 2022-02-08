<script>
	import { page } from '$app/stores';

	let firtstName = 'Amanda';

	const nav = [
		{ title: 'Home', path: '/' },
		{ title: 'Services', path: '/services' },
		{ title: 'About', path: '/about' },
		{ title: 'Contact', path: '/contact' }
	];
</script>

<nav>
	{#each nav as item}
		<a class:active={$page.url.pathname === item.path} href={item.path}>{item.title}</a>
	{/each}
</nav>

<style>
	a {
		font-size: small;
		text-decoration: none;
		color: white;
		margin-left: 0.5rem;
		padding: 0.5rem 1rem;
		/* outline: 2px solid white; */
		background-color: var(--color-dkPurple2);
		border-radius: 1rem;
	}

	a:hover {
		/* text-decoration: underline; */
		/* color: var(--color-ltPurple); */
		color: var(--color-mdOrange);
		font-weight: 600;
	}

	.active {
		/* color: var(--color-ltPurple); */
		font-weight: bold;
	}
</style>
