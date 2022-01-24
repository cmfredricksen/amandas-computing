<svelte:head>
	<title>Gaylord Computing | Contact</title>
</svelte:head>
<div class="contact-form">
	<h1>Contact Me:</h1>
	<form action="https://formsubmit.co/chris@cmfred.com" method="POST" class="form">
		<label for="name">Name:</label>
		<input type="text" name="name" required />
		<label for="email">Email:</label>
		<input type="email" name="email" required />
		<input type="hidden" name="_next" value="https://eloquent-pike-c24d4b.netlify.app/thanks" />
		<label for="message">Message:</label>
		<textarea name="message" id="message" cols="30" rows="10" />
		<input type="hidden" name="_subject" value="Amanda" />
		<input type="hidden" name="_captcha" value="false" />
		<button type="submit">Send</button>
	</form>
</div>

<style>
	.contact-form {
		/* width: 80%; */
		margin: 0 auto;
		padding: 1rem 0 2rem;
	}
	h1 {
		margin: 0 auto;
		text-align: center;
	}
	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		flex: 1;
		outline: 2px solid var(--color-white);
		background-color: var(--color-dkPurple);
		border-radius: 1rem;
		width: 70%;
		margin: 0.5rem auto;
		padding: 1rem 2rem;
	}
	label {
		margin-bottom: 0.5rem;
	}
	input,
	textarea {
		margin-bottom: 1rem;
		border-radius: 0.25rem;
		padding: 0 0.5rem;
		color: var(--color-white);
		background-color: var(--color-ltPurple);
		border: none;
	}

	input {
		width: 50%;
		line-height: 2;
	}

	textarea {
		line-height: 2;
	}

	button {
		width: 100px;
		line-height: 2;
		color: var(--color-white);
		background-color: var(--color-dkPurple2);
		margin: 0.5rem auto;
		border-radius: 0.25rem;
		border: 2px solid var(--color-white);
		font-family: var(--font-heading);
	}

	button:hover {
		color: var(--color-ltPurple);
	}
</style>
