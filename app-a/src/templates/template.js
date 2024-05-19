import { html } from "swtl";
import { globalStyles, appStyles } from "../styles/styles.js";

export const template = () => html` <div>
  <template shadowrootmode="open">
    ${appStyles()}
    <section>
      <h2>Microfrontend A</h2>
      <slot name="content">Loading content...</slot>
    </section>
  </template>

  ${fetch("http://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => html`<div slot="content">Content: ${data.name}</div>`)}
</div>`;
