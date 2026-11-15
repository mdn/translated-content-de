---
title: "WebGL2RenderingContext: Methode isSync()"
short-title: isSync()
slug: Web/API/WebGL2RenderingContext/isSync
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGL2RenderingContext.isSync()`** der [WebGL 2 API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn das übergebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt ist.

## Syntax

```js-nolint
isSync(sync)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, das geprüft werden soll. Wird `null` übergeben, gibt die Methode `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), das angibt, ob das übergebene Objekt ein gültiges [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt ist (`true`) oder nicht (`false`).

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
