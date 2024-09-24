---
title: "WebGL2RenderingContext: fenceSync()-Methode"
short-title: fenceSync()
slug: Web/API/WebGL2RenderingContext/fenceSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.fenceSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt ein neues
{{domxref("WebGLSync")}}-Objekt und fügt es in den GL-Befehlstrom ein.

## Syntax

```js-nolint
fenceSync(condition, flags)
```

### Parameter

- `condition`
  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das die Bedingung angibt, die erfüllt sein muss, um den Status des Sync-Objekts auf "signaled" zu setzen. Muss `gl.SYNC_GPU_COMMANDS_COMPLETE` sein.
- `flags`
  - : Ein {{domxref("WebGL_API/Types", "GLbitfield")}}, das eine bitweise Kombination von Flags zur Steuerung des Verhaltens des Sync-Objekts angibt. Muss `0` sein (existiert nur für Erweiterungen).

### Rückgabewert

Ein {{domxref("WebGLSync")}}-Objekt.

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein. `WebGLSync`
Objekte sind in WebGL 1 nicht verfügbar.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLSync")}}
