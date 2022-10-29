<script>
	import '../global.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />
<div class="wrapper">
	<slot />
</div>

<Footer />

<style>
	.wrapper {
		max-width: 1100px;
		margin: 0 auto;
		background-color: var(--color-dkPurple3);
		color: var(--color-white);
	}
</style>
