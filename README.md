# issue

To reproduce the issue:

```bash
rm -fr node_modules/ \
    && npm install \
    && npx vite-node src/issue.js
```

<details>

<summary>Output</summary>

```
added 43 packages, and audited 44 packages in 434ms

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error: Cannot find module '/workspaces/vite-node-issue/node_modules/.vite/deps/svelte_internal_disclose-version.js' imported from /workspaces/vite-node-issue/node_modules/vite-node/dist/client.mjs
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:780:12)
    at ModuleLoader.#cachedDefaultResolve (node:internal/modules/esm/loader:704:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:687:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:305:38)
    at onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:643:36)
    at TracingChannel.tracePromise (node:diagnostics_channel:344:14)
    at ModuleLoader.import (node:internal/modules/esm/loader:642:21) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///workspaces/vite-node-issue/node_modules/.vite/deps/svelte_internal_disclose-version.js'
}

Node.js v22.15.0
```

</details>

You can use `vite optimize` like this to get it to work:

```bash
rm -fr node_modules/ \
    && npm install \
    && npx vite optimize \
    && npx vite-node src/issue.js
```

but then you get a deprecation warning.

<details>

<summary>Output</summary>

```
manually calling optimizeDeps is deprecated. This is done automatically and does not need to be called manually.
Optimizing dependencies:
  svelte, svelte/animate, svelte/easing, svelte/internal, svelte/internal/client, svelte/internal/disclose-version, svelte/internal/flags/legacy, svelte/internal/flags/tracing, svelte/legacy, svelte/motion, svelte/reactivity, svelte/reactivity/window, svelte/store, svelte/transition, svelte/events
```

</details>
