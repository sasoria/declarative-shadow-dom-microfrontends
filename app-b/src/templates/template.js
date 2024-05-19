import { html } from "swtl";
import { globalStyles, appStyles } from "../styles/styles.js";

export const template = () => html`
  <template shadowrootmode="open">
    ${appStyles()}
    <h2>Microfrontend B</h2>
    <slot name="content">Loading content...</slot>
  </template>
  ${fetch("http://swapi.dev/api/people/2")
    .then((res) => res.json())
    .then((data) => html`<div slot="content">Content: ${data.name}</div>`)}
`;
