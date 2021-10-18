<template>
  <img class="recipe-image" :src="this.recipe.image" alt="Tasty food" />
  <div class="recipe-container">
    <h2 class="recipe-title">{{ this.recipe.title }}</h2>
    <h3 class="recipe-subtitle">Ingredients</h3>
    <ul class="recipe-list">
      <li
        class="recipe-list-item"
        v-for="item in this.recipe.recipe"
        :key="item.id"
      >
        <p class="recipe-text">{{ item.originalString }}</p>
      </li>
    </ul>
    <h3 class="recipe-subtitle">Recipe</h3>
    <p class="recipe-text">{{ this.recipe.recipeText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeId: this.$route.params.id,
      recipe: [],
    };
  },
  created() {
    this.recipe = this.$route.params.item;
  },
  mounted() {
    return this.$store.state.favs.find((recipe) => recipe.id == this.recipeId);
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 800px;
  margin: 0 auto;

  .recipe-image {
    height: 350px;
    max-width: 800px;
    object-fit: cover;
    margin-bottom: 20px;
    position: absolute;
    top: 0;
    left: calc(50% - 400px);
    z-index: -1;
  }
}

.recipe-image {
  height: 350px;
  width: 100vw;
  object-fit: cover;
  margin-bottom: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.recipe-container {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
  padding: 0 20px;

  .recipe-title {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 700;
    padding-top: 50px;
  }

  .recipe-subtitle {
    font-size: 24px;
    margin-bottom: 20px;
    color: #94c973;
  }

  .recipe-text {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
  }

  .recipe-list {
    margin-bottom: 20px;
    list-style-type: none;

    .recipe-list-item {
      padding: 10px 5px;
      line-height: 3;

      .recipe-text {
        font-weight: 400;
      }
    }
  }
}
</style>