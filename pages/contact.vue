<template>
  <section class="hero is-dark is-medium">
    <div class="hero-body mt-5">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title is-size-1 has-text-weight-bold is-size-2-touch">
              Get in touch today
            </h1>
            <p class="subtitle pt-2">
              Have a new project in mind? Drop us a line about your project
              needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section map">
    <div class="container has-text-centered">
      <div class="columns is-multiline">
        <div class="column is-12">
          <iframe
            class="google-map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3316.402259199992!2d-117.86589268435289!3d33.776108980682025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDQ2JzM0LjAiTiAxMTfCsDUxJzQ5LjMiVw!5e0!3m2!1sta!2sus!4v1678895445806!5m2!1sta!2sus"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <section class="section mt-3">
    <div class="container">
      <div class="columns is-centered">
        <div class="column has-text-centered">
          <span class="icon is-large">
            <i class="fas fa-map-marker-alt fa-2x"></i>
          </span>
          <p class="title is-4 mt-2 mb-3">Location</p>
          <p class="subtitle mt-2">
            S4B Consulting Inc. <br />
            1100 Town & Country Rd, Suite 1250 <br />
            Orange, CA 92868
          </p>
        </div>
        <div class="column has-text-centered">
          <span class="icon is-large">
            <i class="fas fa-phone-volume fa-2x"></i>
          </span>
          <p class="title is-4 mt-2 mb-3">Call</p>
          <a class="subtitle" href="tel:1(714)-679-0519">1(714)-679-0519</a>
        </div>
        <div class="column has-text-centered">
          <span class="icon is-large">
            <i class="fas fa-paper-plane fa-2x"></i>
          </span>
          <p class="title is-4 mt-2 mb-3">Email</p>
          <a class="subtitle" href="mailto:info@s4bconsulting.us"
            >info@s4bconsulting.us</a
          >
        </div>
      </div>
    </div>
  </section>

  <section class="section mt-5 mb-6">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-7">
          <h2 class="title has-text-centered has-text-weight-bold is-size-4">
            Want to work with us?
          </h2>
          <p class="subtitle has-text-centered pt-2">
            Cool! Let's talk about your project.
          </p>
          <form>
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" placeholder="Your name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="email" placeholder="Your email" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-rounded is-link">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
iframe {
  border-radius: 1rem;
}
.hero {
  margin-top: -2rem;
  padding-bottom: 1rem;
}

.google-map {
  height: 500px;
  width: 100%;
}
.map {
  margin-top: -8rem;
}

@media screen and (max-width: 767px) {
  .hero-body {
    padding-top: 5rem;
    padding-bottom: 9rem;
  }
}
</style>
