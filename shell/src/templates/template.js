import { html } from "swtl";
import { globalStyles, appStyles } from "../styles/styles.js";

export const template = () => html`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      ${globalStyles()}
    </head>
    <body>
      <div>
        <template shadowrootmode="open">
          ${appStyles()}
          <header>
            <h1>Out of order streaming without JavaScript</h1>
          </header>
          <main>
            <section>
              <slot name="microfrontend-a">Loading...</slot>
            </section>
            <section>
              <slot name="microfrontend-b">Loading...</slot>
            </section>
          </main>
          <footer>Footer</footer>
        </template>
        ${fetch("http://localhost:4000")
          .then((res) => res.text())
          .then((text) => html`<div slot="microfrontend-a">${text}</div>`)}
        ${fetch("http://localhost:4100")
          .then((res) => res.text())
          .then((text) => html`<div slot="microfrontend-b">${text}</div>`)}
      </div>
    </body>
  </html>
`;
