import { p as promiseResolve, b as bootstrapLazy } from './index-8b54ff93.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["omg-toggle-button",[[1,"omg-toggle-button",{"buttonText":[1,"button-text"]}]]]], options);
});
