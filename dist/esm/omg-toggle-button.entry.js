import { r as registerInstance, h } from './index-8b54ff93.js';

const toggleButtonCss = "button{border:1px solid var(--omg-btn-border-color, #875b0b);font-family:var(--omg-font-family, sans-serif);padding:1rem 0.5rem;background:var(--omg-primary-color, #875b0b);color:var(--omg-text-color, white);box-shadow:0 2px 8px rgba(0, 0, 0, 0.25)}";

const toggleButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { type: 'submit' }, this.buttonText));
  }
};
toggleButton.style = toggleButtonCss;

export { toggleButton as omg_toggle_button };
