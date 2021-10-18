import { createApp } from "vue"; 
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import SocialIcon from "./components/About/SocialIcon.vue";
import HomeRecipes from "./components/Home/HomeRecipes.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faHeart, faList, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faTwitter, faGithub, faArrowRight, faHeart, faList, faTrash);

const store = createStore({
  state() {
    return {
      favs: []
    }
  },
  mutations: {
    updateRecipe(state, payload) {
      state.favs.push(payload);
      console.log(state.favs);
    },

    removeRecipe(state, recipe) {
      let item = state.favs.indexOf(recipe);

      state.favs.splice(item, 1);
    }
  },
  getters: {
    recipeList(state) {
      return state.favs;
    }
  }
})

createApp(App)
  .use(router)
  .use(store)
  .component("social-icon", SocialIcon)
  .component("home-recipes", HomeRecipes)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
