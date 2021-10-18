<template>
  <div class="container">
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
    <div class="menu-container">
      <router-link to="/list">
        <social-icon prefix="fa" name="list"></social-icon>
      </router-link>
      <social-icon prefix="fa" name="heart" @click="addToFavs"></social-icon>
      <social-icon
        prefix="fa"
        name="arrow-right"
        @click="getRandomRecipes"
      ></social-icon>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SocialIcon from "../About/SocialIcon.vue";

export default {
  components: { SocialIcon },
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
    addToFavs() {
      this.$store.commit("updateRecipe", this.recipe);
    },
  },
  mounted() {
    this.getRandomRecipes();
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1000px) {
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

.menu-container {
  position: fixed;
  bottom: 40px;
  left: calc(50vw - 100px);
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 25px;
  -webkit-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
  -moz-box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
  box-shadow: 8px 8px 22px -11px rgba(66, 68, 90, 0.45);
}
</style>