import App from "./App.svelte";
import { globalHistory as history } from "svelte-routing/src/history";
import { wrapHistory } from "oaf-svelte-routing";
import new_fast from "./data/new_fast.js";

const routerSettings = {
  documentTitle: location => {
    const defaultTitle =
      "Framework for Accessible Specification of Technologies Tool | Web Accessibility Initiative (WAI) | W3C";
    let newTitle;

    if (location.pathname.startsWith("/step/")) {
      const id = location.pathname.substring(6, 7);
      return (newTitle = `${new_fast[id - 1].principle.handle} - ${defaultTitle}`);
    }

    switch (location.pathname) {
      case "/":
        return (newTitle = `Start - ${defaultTitle}`);
      case "/your-evaluation":
        return (newTitle = `Your Evaluation - ${defaultTitle}`);
      case "/results":
        return (newTitle = `Results - ${defaultTitle}`);
    }
    return newTitle;
  },
  setPageTitle: true,
};

wrapHistory(history, routerSettings);

const app = new App({
  target: document.getElementById("conformance-tool"),
});

export default app;
