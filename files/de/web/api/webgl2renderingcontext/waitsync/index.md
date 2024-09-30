---
title: "WebGL2RenderingContext: waitSync() Methode"
short-title: waitSync()
slug: Web/API/WebGL2RenderingContext/waitSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.waitSync()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) kehrt sofort zurück, wartet jedoch auf dem GL-Server, bis das angegebene [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisiert wird.

Die Methode ist wirkungslos, wenn keine Möglichkeit zur Synchronisation zwischen mehreren GL-Kontexten besteht.

## Syntax

```js-nolint
waitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, auf das gewartet werden soll.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Kombination von Flags zur Steuerung des Flushing-Verhaltens angibt. Muss `0` sein (existiert nur für Erweiterungen).
- `timeout`
  - : Ein [`GLint64`](/de/docs/Web/API/WebGL_API/Types), das einen Timeout angibt, den der Server abwarten soll, bevor er fortfährt. Muss `gl.TIMEOUT_IGNORED` sein.

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
