---
title: "WebGL2RenderingContext: isSync() Methode"
short-title: isSync()
slug: Web/API/WebGL2RenderingContext/isSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.isSync()`** Methode des [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges {{domxref("WebGLSync")}} Objekt ist.

## Syntax

```js-nolint
isSync(sync)
```

### Parameter

- `sync`
  - : Ein {{domxref("WebGLSync")}} Objekt, das geprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, das angibt, ob das gegebene Objekt ein gültiges {{domxref("WebGLSync")}} Objekt ist (`true`) oder nicht (`false`).

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLSync` Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);

// …

gl.isSync(sync);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLSync")}}
