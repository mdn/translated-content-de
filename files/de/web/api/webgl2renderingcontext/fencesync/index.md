---
title: "WebGL2RenderingContext: fenceSync() Methode"
short-title: fenceSync()
slug: Web/API/WebGL2RenderingContext/fenceSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.fenceSync()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt ein neues
[`WebGLSync`](/de/docs/Web/API/WebGLSync) Objekt und fügt es in den GL-Befehlsstrom ein.

## Syntax

```js-nolint
fenceSync(condition, flags)
```

### Parameter

- `condition`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das die Bedingung spezifiziert, die erfüllt sein muss, um den Zustand des Sync-Objekts auf "gesendet" zu setzen. Muss `gl.SYNC_GPU_COMMANDS_COMPLETE` sein.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Kombination von Flags angibt, die das Verhalten des Sync-Objekts steuern. Muss `0` sein (existiert nur für Erweiterungen).

### Rückgabewert

Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync) Objekt.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. `WebGLSync`
Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
