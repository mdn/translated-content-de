---
title: "WebGL2RenderingContext: waitSync()-Methode"
short-title: waitSync()
slug: Web/API/WebGL2RenderingContext/waitSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.waitSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) kehrt sofort zurück, wartet jedoch auf dem GL-Server, bis das angegebene {{domxref("WebGLSync")}}-Objekt ein Signal empfängt.

Die Methode hat keine Wirkung, wenn eine Synchronisierung zwischen mehreren GL-Kontexten nicht möglich ist.

## Syntax

```js-nolint
waitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein {{domxref("WebGLSync")}}-Objekt, auf das gewartet werden soll.
- `flags`
  - : Ein {{domxref("WebGL_API/Types", "GLbitfield")}}, das eine bitweise Kombination von Flags spezifiziert, die das Flushing-Verhalten steuern. Muss `0` sein (existiert nur für Erweiterungen).
- `timeout`
  - : Ein {{domxref("WebGL_API/Types", "GLint64")}}, der ein Timeout angibt, das der Server warten soll, bevor er fortfährt. Muss `gl.TIMEOUT_IGNORED` sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
gl.waitSync(sync, 0, gl.TIMEOUT_IGNORED);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLSync")}}
