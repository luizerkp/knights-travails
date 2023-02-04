import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import "./css/style.css";
import footer from "./footerContent";
import { getKnightsShortestPath, printPath } from "./knightsTravailPath";
import displayTestsGetKnightsShortestPath from "./displayTests.getKnightsShortestPath";

// buildPageContent
(() => {
  footer.buildFooter();
})();

displayTestsGetKnightsShortestPath(getKnightsShortestPath, printPath);
