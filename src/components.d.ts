/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OmgToggleButton {
        "buttonText": string;
    }
}
declare global {
    interface HTMLOmgToggleButtonElement extends Components.OmgToggleButton, HTMLStencilElement {
    }
    var HTMLOmgToggleButtonElement: {
        prototype: HTMLOmgToggleButtonElement;
        new (): HTMLOmgToggleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "omg-toggle-button": HTMLOmgToggleButtonElement;
    }
}
declare namespace LocalJSX {
    interface OmgToggleButton {
        "buttonText"?: string;
    }
    interface IntrinsicElements {
        "omg-toggle-button": OmgToggleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "omg-toggle-button": LocalJSX.OmgToggleButton & JSXBase.HTMLAttributes<HTMLOmgToggleButtonElement>;
        }
    }
}
