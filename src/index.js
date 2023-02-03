import "./css/normalize.css";
import "material-icons/iconfont/round.css";
import "./css/style.css";
import footer from "./footerContent.js";
import { getKnightsShortestPath, printPath } from "./knightsTravailPath.js";
import testGetKnightsShortestPath from "./test.getKnightsShortestPath.js";

// buildPageContent
(() => {
  footer.buildFooter();
})();

testGetKnightsShortestPath(getKnightsShortestPath, printPath);
