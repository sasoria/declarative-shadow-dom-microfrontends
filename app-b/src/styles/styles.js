import { render, html } from "swtl";

export const globalStyles = () => html`
  <style>
    :root {
      --color-primary: #2d3748;
      --color-secondary: #ffc60d;
    }
  </style>
`;

export const appStyles = () => html`
  <style>
    section {
      padding: 1rem;
    }
  </style>
`;
