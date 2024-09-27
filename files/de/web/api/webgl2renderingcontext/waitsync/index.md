---
title: "WebGL2RenderingContext: waitSync()-Methode"
short-title: waitSync()
slug: Web/API/WebGL2RenderingContext/waitSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.waitSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) kehrt sofort zurück, wartet jedoch auf dem GL-Server, bis das angegebene [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisiert wird.

Die Methode bewirkt nichts, wenn es keine Möglichkeit gibt, zwischen mehreren GL-Kontexten zu synchronisieren.

## Syntax

```js-nolint
waitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, auf das gewartet werden soll.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), das eine bitweise Kombination von Flags angibt, die das Flush-Verhalten steuern. Muss `0` sein (existiert nur für Erweiterungen).
- `timeout`
  - : Ein [`GLint64`](/de/docs/Web/API/WebGL_API/Types), das ein Timeout angibt, das der Server abwarten soll, bevor er fortfährt. Muss `gl.TIMEOUT_IGNORED` sein.

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

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
