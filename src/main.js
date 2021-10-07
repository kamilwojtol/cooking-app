import { createApp } from "vue";
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

library.add(faLinkedin, faTwitter, faGithub);

createApp(App)
  .use(router)
  .component("social-icon", SocialIcon)
  .component("home-recipes", HomeRecipes)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
