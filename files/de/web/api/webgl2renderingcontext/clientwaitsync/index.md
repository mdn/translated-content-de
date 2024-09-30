---
title: "WebGL2RenderingContext: Methode clientWaitSync()"
short-title: clientWaitSync()
slug: Web/API/WebGL2RenderingContext/clientWaitSync
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.clientWaitSync()`** Methode der
[WebGL 2 API](/de/docs/Web/API/WebGL_API) blockiert und wartet, bis ein
[`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisiert wird oder ein angegebener Timeout abgelaufen ist.

## Syntax

```js-nolint
clientWaitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, auf das gewartet wird.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), das eine bitweise Kombination von Flags angibt, die das Flush-Verhalten steuern. Kann `gl.SYNC_FLUSH_COMMANDS_BIT` sein.
- `timeout`
  - : Ein [`GLint64`](/de/docs/Web/API/WebGL_API/Types), der einen Timeout (in Nanosekunden) angibt, für den auf das Signalisieren des Sync-Objekts gewartet wird. Darf nicht größer als `gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL` sein.

### Rückgabewert

Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Status des Sync-Objekts anzeigt.

- `gl.ALREADY_SIGNALED`: Zeigt an, dass das Sync-Objekt signalisiert war, als diese Methode aufgerufen wurde.
- `gl.TIMEOUT_EXPIRED`: Zeigt an, dass die `timeout`-Zeit verstrichen ist und das Sync-Objekt nicht signalisiert wurde.
- `gl.CONDITION_SATISFIED`: Zeigt an, dass das Sync-Objekt signalisiert wurde, bevor der `timeout` abgelaufen ist.
- `gl.WAIT_FAILED`: Zeigt an, dass während der Ausführung ein Fehler aufgetreten ist.

## Beispiele

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
const status = gl.clientWaitSync(sync, 0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
