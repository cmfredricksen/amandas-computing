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
