import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const toggleButtonCss = "button{border:1px solid var(--omg-btn-border-color, #875b0b);font-family:var(--omg-font-family, sans-serif);padding:1rem 0.5rem;background:var(--omg-primary-color, #875b0b);color:var(--omg-text-color, white);box-shadow:0 2px 8px rgba(0, 0, 0, 0.25)}";

const toggleButton = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h("button", { type: 'submit' }, this.buttonText));
  }
  static get style() { return toggleButtonCss; }
};

const OmgToggleButton = /*@__PURE__*/proxyCustomElement(toggleButton, [1,"omg-toggle-button",{"buttonText":[1,"button-text"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      OmgToggleButton
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { OmgToggleButton, defineCustomElements };
