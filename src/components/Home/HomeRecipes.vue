<template>
  <img class="recipe-image" :src="this.recipe.image" alt="Tasty food" />
  <div class="recipe-container">
    <h2 class="recipe-title">{{ this.recipe.title }}</h2>
    <h3 class="recipe-subtitle">Ingredients</h3>
    <ul class="recipe-list">
      <li
        class="recipe-list-item"
        v-for="item in recipe.extendedIngredients"
        :key="item.id"
      >
        <p class="recipe-text">{{ item.originalString }}</p>
      </li>
    </ul>
    <h3 class="recipe-subtitle">Recipe</h3>
    <p class="recipe-text">{{ this.recipeText }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      recipe: [],
      recipeText: "",
    };
  },
  methods: {
    getRandomRecipes() {
      axios
        .get(
          "https://api.spoonacular.com/recipes/random?apiKey=2a554d8ba47b48efa3545bdc781c3e1f"
        )
        .then((response) => {
          if (response.status == 200) {
            this.recipe = response.data.recipes[0];
            this.recipeText = this.recipe.instructions.replace(
              /<\/?[^>]+(>|$)/g,
              " "
            );
          }
        });
    },
    getMainColor() {},
  },
  mounted() {
    this.getRandomRecipes();
  },
};
</script>

<style lang="scss" scoped>
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