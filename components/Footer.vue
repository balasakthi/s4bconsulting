<template>
  <footer class="footer has-background-dark p-0">
    <div class="container p-6">
      <div class="columns is-centered">
        <div class="column is-one-third has-text-centered">
          <div class="widget mb-0">
            <div class="logo mb-4">
              <h2 class="title is-4 has-text-white">Location</h2>
            </div>

            <!-- <a
              href="mailto:info@s4bconsulting.us"
              class="is-size-5 has-text-white has-text-weight-bold"
            >
              info@s4bconsulting.us</a
            > -->
            <p class="mt-4 mb-3 has-text-white">
              S4B Consulting Inc.,<br />
              1100 Town & Country Road,<br />
              Suite 1250, Orange, <br />CA 92868.
            </p>
            <!-- <a href="tel:1(714)-679-0519"
              ><span class="has-text-white is-size-5 has-text-weight-bold"
                >1(714)-679-0519</span
              ></a
            > -->
          </div>
        </div>
        <div class="column is-one-third has-text-centered">
          <h2 class="title is-4 has-text-white">Follow us</h2>
          <a href="#"
            ><i class="fab fa-facebook fa-2x has-text-light p-3"></i
          ></a>
          <a href="#"
            ><i class="fab fa-youtube fa-2x has-text-light p-3"></i
          ></a>
          <a href="#"
            ><i class="fab fa-linkedin fa-2x has-text-light p-3"></i
          ></a>
        </div>
        <div class="column is-one-third has-text-centered">
          <h2 class="title is-4 has-text-white">S4B Consulting Inc.</h2>
          <p class="has-text-light">
            Contact us today to learn more about our services and how we can
            help you get where you need to go.
          </p>
        </div>
      </div>
    </div>
    <section class="copyright has-text-centered has-text-light p-5">
      <p>© 2023 S4B Consulting Inc. All rights reserved.</p>
    </section>
  </footer>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
</script>

<style scoped>
.title {
  font-weight: bold;
}

p {
  font-size: 1.25rem;
  /* font-weight: bold; */
}

.copyright {
  background-color: #1a252f;
}

.fixed-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
