import Navigo from "navigo";
const route = new Navigo("/", { hash: true, linksSelector: "a" });

const render = (content, container) => {
    container.innerHTML = content();
}
export { render, route };