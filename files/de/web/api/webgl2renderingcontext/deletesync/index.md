---
title: "WebGL2RenderingContext: deleteSync() Methode"
short-title: deleteSync()
slug: Web/API/WebGL2RenderingContext/deleteSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.deleteSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.

## Syntax

```js-nolint
deleteSync(sync)
```

### Parameter

- `sync`
  - : Ein zu löschendes [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSync`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);

// …

gl.deleteSync(sync);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
