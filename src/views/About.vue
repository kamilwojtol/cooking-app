<template>
  <div class="about">
    <div class="about-me">
      <img class="image" src="../assets/me.jpg" alt="Photo of Kamil Wojtol" />
      <h2 class="title">
        This site was created by
        <a class="title-link" href="https://github.com/kamilwojtol/"
          >Kamil Wojtol</a
        >
      </h2>
    </div>
    <div class="about-social">
      <h3 class="social-title">You can find me there:</h3>
      <div class="social-icons">
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          size="2x"
          class="social-icon"
        />
        <font-awesome-icon
          :icon="['fab', 'twitter']"
          size="2x"
          class="social-icon"
        />
        <font-awesome-icon
          :icon="['fab', 'github']"
          size="2x"
          class="social-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 3px solid #94c973;
}

.title {
  font-size: 28px;
  line-height: 1.5;
  margin-top: 25px;

  .title-link {
    color: #94c973;
    text-decoration: none;
    display: block;
    transition: 0.7s all ease-in-out;

    &:hover {
      transition: 0.7s all ease-in-out;
      font-size: 32px;
    }
  }
}

.about-social {
  margin-top: 40px;

  .social-title {
    font-size: 20px;
  }

  .social-icons {
    margin: 10px 0;

    .social-icon {
      margin: 0 10px;
      transition: 0.7s all ease-in-out;

      &:hover {
        cursor: pointer;
        color: #94c973;
        transition: 0.7s all ease-in-out;
      }
    }
  }
}
</style>
