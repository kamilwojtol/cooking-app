<template>
  <a :href="this.link" target="_blank" class="social-link">
    <font-awesome-icon
      :icon="[`${this.prefix}`, `${this.name}`]"
      size="2x"
      class="social-icon"
    />
  </a>
</template>

<script>
export default {
  props: ["name", "prefix", "link"],
};
</script>

<style lang="scss" scoped>
.social-icon {
  margin: 0 10px;
  transition: 0.3s all ease-in-out;

  &:hover {
    cursor: pointer;
    transition: 0.3s all ease-in-out;
  }

  &:visited {
    color: #444;
  }
}

.social-link:visited {
  color: #444;
}
</style>