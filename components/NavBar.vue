<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img class="logo" src="../assets/img/S4BLogo.svg" />
        </NuxtLink>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="nav-links"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="nav-links"
        class="navbar-menu has-background-dark"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <div class="navbar-end">
          <NuxtLink
            v-for="navItem in navItems"
            :key="navItem.title"
            :to="navItem.to"
            class="navbar-item has-text-white"
            >{{ navItem.title }}</NuxtLink
          >
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-link is-rounded">
                <strong>Sign up</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const isActive = ref(false);
const navItems = ref([
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "What we offer", to: "/services" },
  { title: "Contact", to: "/contact" },
]);
</script>

<style scoped>
.navbar {
  height: 80px;
}

.logo {
  max-height: 60px;
  padding: 5px;
}

.navbar-item:hover {
  background-color: #233140;
}
</style>
