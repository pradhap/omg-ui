'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-079188d4.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["omg-toggle-button.cjs",[[1,"omg-toggle-button",{"buttonText":[1,"button-text"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
