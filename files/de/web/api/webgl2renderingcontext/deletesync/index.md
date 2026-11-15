---
title: "WebGL2RenderingContext: Methode deleteSync()"
short-title: deleteSync()
slug: Web/API/WebGL2RenderingContext/deleteSync
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.deleteSync()`** der [WebGL-2-API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.

## Syntax

```js-nolint
deleteSync(sync)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, das gelöscht werden soll. Die Übergabe von `null` bewirkt nichts.

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
