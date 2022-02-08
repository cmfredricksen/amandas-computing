<script>
	import Card from '$lib/components/card.svelte';
	import Btn from '$lib/components/button.svelte';
	const services = [
		{
			title: 'Upgrades',
			icon: 'memory',
			text: 'Installing and Upgrading Components to make your computer run better.',
			lista: 'Cost: Price of component plus labor & travel',
			listb: '$40 per hour',
			listc: 'minimum: 30 minutes'
		},
		{
			title: 'Custom Builds',
			icon: 'build',
			text: 'Have a custom computer built to fit your needs, from home pc to gaming machine!',
			lista: 'Cost: Parts, components, planning, labor & travel',
			listb: 'Contace me to get a quote!',
			listc: 'one flat fee includes everything!'
		},
		{
			title: 'Consultation',
			icon: 'call',
			text: 'Advice and troubleshooting to get things running quickly!',
			lista: 'Cost: Hourly plus travel if needed',
			listb: '$40 per hour',
			listc: 'minimum: 15 minutes'
		}
	];
</script>

<svelte:head>
	<title>Gaylord Computing | Services Offered</title>
</svelte:head>
<div class="services">
	<h1>Services</h1>
	{#each services as service}
		<div class="card">
			<Card
				title={service.title}
				icon={service.icon}
				text={service.text}
				lista={service.lista}
				listb={service.listb}
				listc={service.listc}
			/>
		</div>
		<div class="btn-box">
			<Btn link="/contact" text="Contact Me" />
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
	}
	.services {
		display: flex;
		flex-direction: column;
		border-right: 3px solid var(--color-mdOrange);
		border-left: 3px solid var(--color-mdOrange);
		border-bottom: 3px solid var(--color-mdOrange);
		padding-bottom: 2rem;
	}
	.card {
		border: 2px solid white;
		margin: 1rem 2rem;
		outline: 2px solid var(--color-mdOrange);
	}
	.btn-box {
		text-align: center;
	}
</style>
