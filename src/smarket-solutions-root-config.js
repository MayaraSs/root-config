import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@smarket-solutions/menu",
  app: () => System.import("@smarket-solutions/menu"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
