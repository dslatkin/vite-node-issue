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
$ rm -fr node_modules/ && npm i && npx vite-node src/issue.js

added 43 packages, and audited 44 packages in 503ms

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
node:internal/modules/esm/resolve:265
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error: Cannot find module '/workspaces/tmp/node_modules/.vite/deps/svelte_internal_disclose-version.js' imported from /workspaces/tmp/node_modules/vite-node/dist/client.mjs
    at finalizeResolution (node:internal/modules/esm/resolve:265:11)
    at moduleResolve (node:internal/modules/esm/resolve:933:10)
    at defaultResolve (node:internal/modules/esm/resolve:1169:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:542:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:510:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:239:38)
    at ModuleLoader.import (node:internal/modules/esm/loader:472:34)
    at defaultImportModuleDynamicallyForModule (node:internal/modules/esm/utils:214:31)
    at importModuleDynamicallyCallback (node:internal/modules/esm/utils:253:12)
    at ViteNodeRunner.importExternalModule (file:///workspaces/tmp/node_modules/vite-node/dist/client.mjs:368:3) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///workspaces/tmp/node_modules/.vite/deps/svelte_internal_disclose-version.js'
}

Node.js v20.18.1
```

</details>

You can use `vite optimize` like this to get it to work:

```bash
rm -fr node_modules/ \
    && npm install \
    && npx vite optimize \
    && npx vite-node src/issue.js
```

but but then you get a deprecation warning.

<details>

<summary>Output</summary>

```
manually calling optimizeDeps is deprecated. This is done automatically and does not need to be called manually.
Optimizing dependencies:
  svelte, svelte/animate, svelte/easing, svelte/internal, svelte/internal/client, svelte/internal/disclose-version, svelte/internal/flags/legacy, svelte/internal/flags/tracing, svelte/legacy, svelte/motion, svelte/reactivity, svelte/reactivity/window, svelte/store, svelte/transition, svelte/events
```

</details>
