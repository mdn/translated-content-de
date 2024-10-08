---
title: "WebGL2RenderingContext: isSync()-Methode"
short-title: isSync()
slug: Web/API/WebGL2RenderingContext/isSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.isSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt ist.

## Syntax

```js-nolint
isSync(sync)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, das getestet werden soll.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob das gegebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt (`true`) ist oder nicht (`false`).

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSync`-Objekte sind in WebGL 1 nicht verfügbar.

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

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
