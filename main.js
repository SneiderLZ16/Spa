import { router } from "./router.js";

window.addEventListener("hashchange", () => router(location.hash));
window.addEventListener("load", () => {
  if (!location.hash) location.hash = "#/login";
  router(location.hash);
});
