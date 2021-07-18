import { h, Component, Prop } from '@stencil/core';
export class toggleButton {
  render() {
    return (h("button", { type: 'submit' }, this.buttonText));
  }
  static get is() { return "omg-toggle-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./toggle-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["toggle-button.css"]
  }; }
  static get properties() { return {
    "buttonText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "button-text",
      "reflect": false
    }
  }; }
}
