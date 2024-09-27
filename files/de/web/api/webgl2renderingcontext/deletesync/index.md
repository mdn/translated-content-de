---
title: "WebGL2RenderingContext: Methode deleteSync()"
short-title: deleteSync()
slug: Web/API/WebGL2RenderingContext/deleteSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die Methode **`WebGL2RenderingContext.deleteSync()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
[`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.

## Syntax

```js-nolint
deleteSync(sync)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, das gelöscht werden soll.

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
