---
title: "WebGL2RenderingContext: fenceSync() Methode"
short-title: fenceSync()
slug: Web/API/WebGL2RenderingContext/fenceSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.fenceSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt ein neues
[`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt und fügt es in den GL-Befehlstrom ein.

## Syntax

```js-nolint
fenceSync(condition, flags)
```

### Parameter

- `condition`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der die Bedingung angibt, die erfüllt sein muss, damit der Status des Sync-Objekts auf "signaled" gesetzt wird. Muss `gl.SYNC_GPU_COMMANDS_COMPLETE` sein.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Kombination von Flags angibt, die das Verhalten des Sync-Objekts steuern. Muss `0` sein (existiert nur für Erweiterungen).

### Rückgabewert

Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSync`-Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
