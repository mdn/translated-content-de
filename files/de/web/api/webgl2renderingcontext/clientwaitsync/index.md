---
title: "WebGL2RenderingContext: Methode clientWaitSync()"
short-title: clientWaitSync()
slug: Web/API/WebGL2RenderingContext/clientWaitSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.clientWaitSync()`** Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) blockiert und wartet darauf, dass ein
[`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt signalisert wird oder eine angegebene Zeitüberschreitung abläuft.

## Syntax

```js-nolint
clientWaitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein [`WebGLSync`](/de/docs/Web/API/WebGLSync)-Objekt, auf das gewartet werden soll.
- `flags`
  - : Ein [`GLbitfield`](/de/docs/Web/API/WebGL_API/Types), der eine bitweise Kombination von Flags angibt, die das Pufferverhalten steuern. Kann `gl.SYNC_FLUSH_COMMANDS_BIT` sein.
- `timeout`
  - : Ein [`GLint64`](/de/docs/Web/API/WebGL_API/Types), der eine Zeitüberschreitung (in Nanosekunden) angibt, für die auf das Signalisieren des Synchronisationsobjekts gewartet werden soll. Darf nicht größer sein als
    `gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.

### Rückgabewert

Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das den Status des Synchronisationsobjekts angibt.

- `gl.ALREADY_SIGNALED`: Gibt an, dass das Synchronisationsobjekt signalisert wurde, als
  diese Methode aufgerufen wurde.
- `gl.TIMEOUT_EXPIRED`: Gibt an, dass die `timeout`-Zeit abgelaufen ist
  und das Synchronisationsobjekt nicht signalisert wurde.
- `gl.CONDITION_SATISFIED`: Gibt an, dass das Synchronisationsobjekt signalisert wurde
  bevor die `timeout`-Zeit abgelaufen ist.
- `gl.WAIT_FAILED`: Gibt an, dass während der Ausführung ein Fehler aufgetreten ist.

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
