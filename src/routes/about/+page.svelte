<script>
	import Btn from '$lib/components/button.svelte';
</script>

<svelte:head>
	<title>Amanda's Computing | About</title>
</svelte:head>
<div class="about">
	<h1>About Me</h1>
	<div class="section-1">
		<img src="/images/gamer.jpg" alt="gamer accessories" class="img-about" />

		<div class="text-box">
			<p>
				I have over 5 years of experience working with computers and other technologies. From
				troubleshooting issues to replacing parts to building complete gaming systems - I have a
				knack for computer hardware. I am also an avid gamer and consumer of digital media, so I
				know what it takes to run the latest releases.
			</p>

			<p>
				I am available for online consultations Monday through Friday 12pm - 12am U.S.A. Central
				Time. I work on site in Minnesota, primarily in the Arrowhead Region. I can travel within
				the state, contact me for a quote.
			</p>
		</div>
	</div>

	<div class="info-box">
		<h2>Hours: M-F 12pm - 12am CST</h2>
		<Btn link="mailto:cmfredricksen@gmail.com" text="Email Me" />
		<h2>Located in Northern Minnesota</h2>
		<h3>Available Weekends per Schedule Openings</h3>
	</div>

	<div class="img-box">
		<img src="/images/yoshi.jpg" alt="Yoshi" />
		<img src="/images/mboard.jpg" alt="Motherboard" />
	</div>

	<p>
		Please send me an email and I will get back to you as soon as possible. All prices quoted up
		front and are based on parts and labor, plus travel time as needed. One half of payment is due
		at the start of the job, the rest is due upon delivery of product or service. Shipping charges
		may apply. All work is guaranteed!
	</p>

	<div class="thank-you-box">
		<h2>Thanks for stopping by!</h2>
		<Btn link="/contact" text="Contact Me" />
	</div>
</div>

<style>
	.about {
		padding: 2rem 1rem 3rem;
	}

	.section-1 {
		display: flex;
		background-color: var(--color-dkPurple3);
		padding: 2rem 1rem;
	}

	.img-about {
		width: 400px;
		border-radius: 0.5rem;
		border: 2px solid white;
	}
	.text-box {
		font-size: 1.25rem;
	}

	.info-box {
		width: 60%;
		margin: 2rem auto;
		/* padding: 1rem 2rem; */
		padding-bottom: 1.5rem;
		border: 3px solid var(--color-mdOrange);
		outline: 3px dashed white;
		background-color: var(--color-dkPurple3);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-radius: 0.5rem;
	}

	.info-box h2 {
		margin: 1.5rem 0;
		text-shadow: 1px 1px 2px black;
	}

	.info-box h3 {
		color: var(--color-mdOrange);
		text-shadow: 1px 1px 2px black;
	}

	.img-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin: 2rem 0;
		padding: 2rem 2rem;
		background-color: var(--color-dkPurple3);
	}
	.img-box img {
		width: 100%;
		height: 300px;
		margin: 0 -1rem;
	}

	.thank-you-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}

	.thank-you-box h2 {
		margin: 2rem;
		text-shadow: 1px 1px 2px black;
	}

	p,
	h1 {
		margin: 1rem 2rem;
	}

	@media (max-width: 968px) {
		h1 {
			text-align: center;
		}
		.section-1 {
			flex-direction: column;
		}
		.img-about {
			width: 100%;
		}
		.info-box {
			width: 100%;
			text-align: center;
		}
		.img-box {
			flex-direction: column;
			width: 100vw;
			margin: 0;
			padding: 0;
		}
		.img-box img {
			margin-bottom: 1rem;
			height: auto;
		}
		p {
			font-size: 1.25rem;
		}
	}
</style>
