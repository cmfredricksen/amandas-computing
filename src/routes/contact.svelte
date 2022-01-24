<div class="contact-form">
	<h1>Contact Me</h1>
	<p>Just send me a quick message and I will get back to you as soon as possible.</p>
	<form action="https://formsubmit.co/chris@cmfred.com" method="POST">
		<input type="text" name="name" placeholder="Name" required />
		<input type="email" name="email" placeholder="Email" required />
		<!-- <input type="hidden" name="_next" value="localhost:3000/thanks" /> -->
		<!-- <input type="textarea" name="message" placeholder="Message" /> -->
		<textarea name="message" id="message" cols="30" rows="10" placeholder="message" />
		<input type="hidden" name="_subject" value="Amanda" />
		<input type="hidden" name="_captcha" value="false" />
		<button type="submit">Send</button>
	</form>
</div>
