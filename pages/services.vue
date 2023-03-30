<template>
  <section class="hero is-dark is-medium">
    <div class="hero-body mt-5">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title has-text-weight-bold is-size-1 is-size-2-touch">
              Services
            </h1>
            <p class="subtitle pt-2">
              We provide a wide range of creative services.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="columns is-justify-content-center">
        <div
          class="column is-6-widescreen is-8-desktop is-10-tablet has-text-centered"
        ></div>
      </div>
      <div class="columns is-multiline is-justify-content-center">
        <div class="column is-4-widescreen is-6-tablet">
          <div class="card px-5 py-6 has-text-centered">
            <i class="fa-solid fa-headset fa-4x"></i>
            <h2 class="title is-size-5 mb-3 mt-4 has-text-weight-bold">
              SAP Consulting
            </h2>
            <p class="subtitle mt-4">
              We implement end to end S4 HANA solutions with on-premise or cloud
              hosting for our clients. Our consultants have years of experience
              in implementing S4 HANA across multiple industries and
              complexities.
            </p>
          </div>
        </div>
        <div class="column is-4-widescreen is-6-tablet">
          <div class="card px-5 py-6 has-text-centered">
            <i class="fa-solid fa-handshake-angle fa-4x"></i>
            <h2 class="title is-size-5 mb-3 mt-4 has-text-weight-bold">
              SAP Infrastructure Support
            </h2>
            <p class="subtitle mt-4">
              We provide BASIS Managed services, cloud deplpyment services,
              system upgrades, OS/DB migration, Solution manager set up and
              maintenance and Archiving and Disaster recovery set up and
              maintenance.
            </p>
          </div>
        </div>

        <div class="column is-4-widescreen is-6-tablet">
          <div class="card px-5 py-6 has-text-centered">
            <i class="fa-solid fa-rocket fa-4x"></i>
            <h2 class="title is-size-5 mb-3 mt-4 has-text-weight-bold">
              Rollouts
            </h2>
            <p class="subtitle mt-4">
              We can roll out existing global templates for customers with
              minimum customizations across multiple geographies and multiple
              phases of the project.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  /* height: 350px; */
}
.hero {
  margin-top: -2rem;
}
</style>
