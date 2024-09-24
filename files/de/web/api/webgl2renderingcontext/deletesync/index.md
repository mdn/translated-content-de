---
title: "WebGL2RenderingContext: deleteSync() Methode"
short-title: deleteSync()
slug: Web/API/WebGL2RenderingContext/deleteSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.deleteSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes
{{domxref("WebGLSync")}}-Objekt.

## Syntax

```js-nolint
deleteSync(sync)
```

### Parameter

- `sync`
  - : Ein zu löschendes {{domxref("WebGLSync")}}-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLSync`
Objekte sind in WebGL 1 nicht verfügbar.

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

- {{domxref("WebGLSync")}}
