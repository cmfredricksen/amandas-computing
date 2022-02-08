<script>
	import Card from '$lib/components/card.svelte';

	const cardContent = [
		{
			title: 'Upgrades',
			icon: 'memory',
			lista: 'Storage',
			listb: 'Memory',
			listc: 'Graphics',
			text: 'Spruce up your computer with more speed and better performance!'
		},
		{
			title: 'Custom Build',
			icon: 'build',
			lista: 'Gaming',
			listb: 'Business',
			listc: 'Home PC',
			text: 'I can build you a brand new system that meeds your unique computing needs!'
		},
		{
			title: 'Consultation',
			icon: 'call',
			lista: 'Advice',
			listb: 'Troubleshooting',
			listc: 'Flat Fee',
			text: 'I can help you figure out how to proceed!'
		}
	];
</script>

<svelte:head>
	<title>Gaylord Computing | Home</title>
</svelte:head>

<div class="main">
	{#each cardContent as content}
		<div class="section">
			<Card
				title={content.title}
				icon={content.icon}
				lista={content.lista}
				listb={content.listb}
				listc={content.listc}
				text={content.text}
			/>
		</div>
	{/each}
</div>
<div class="info">
	<h1>When You Need a Hand with Your Computer...</h1>
	<p>
		I am experienced in upgrading, fixing and building computers. I can troubleshoot your issues and
		help you find the answers quickly so you can get back to work or play! I can build you a gaming
		rig that is high performance, or a work pc set up for your unique needs.
	</p>
	<div class="btn-box">
		<a class="btn" href="/services">Services</a>
		<a class="btn" href="/contact">Contact Me</a>
	</div>
</div>

<style>
	.main {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 2rem 0;
	}
	.section:nth-child(even) {
		border-right: 2px dashed white;
		border-left: 2px dashed white;
	}
	.info {
		padding: 2rem;
		border-top: 2px solid white;
		background-color: var(--color-dkPurple2);
	}
	p {
		margin: 1rem 0;
	}
	.btn-box {
		text-align: center;
	}
	.btn {
		text-decoration: none;
		background-color: var(--color-mdOrange);
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin: 0 1rem;
		border: 2px solid var(--color-dkOrange);
		color: var(--color-dkPurple2);
		font-weight: bold;
	}
	.btn:hover {
		color: white;
	}
</style>
