import { p as promiseResolve, b as bootstrapLazy } from './index-8b54ff93.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["omg-toggle-button",[[1,"omg-toggle-button",{"buttonText":[1,"button-text"]}]]]], options);
  });
};

export { defineCustomElements };
