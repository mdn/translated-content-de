---
title: "WebGL2RenderingContext: clientWaitSync()-Methode"
short-title: clientWaitSync()
slug: Web/API/WebGL2RenderingContext/clientWaitSync
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.clientWaitSync()`**-Methode des
[WebGL 2 API](/de/docs/Web/API/WebGL_API) blockiert und wartet darauf, dass ein
{{domxref("WebGLSync")}}-Objekt signalisiert wird oder ein festgelegter Timeout abgelaufen ist.

## Syntax

```js-nolint
clientWaitSync(sync, flags, timeout)
```

### Parameter

- `sync`
  - : Ein {{domxref("WebGLSync")}}-Objekt, auf das gewartet werden soll.
- `flags`
  - : Ein {{domxref("WebGL_API/Types", "GLbitfield")}}, das eine bitweise Kombination von Flags angibt, die das Flushing-Verhalten steuern. Kann `gl.SYNC_FLUSH_COMMANDS_BIT` sein.
- `timeout`
  - : Ein {{domxref("WebGL_API/Types", "GLint64")}}, das einen Timeout (in Nanosekunden) angibt, für den gewartet werden soll, bis das Sync-Objekt signalisiert wird. Darf nicht größer sein als `gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Status des Sync-Objekts anzeigt.

- `gl.ALREADY_SIGNALED`: Gibt an, dass das Sync-Objekt signalisiert wurde, als diese Methode aufgerufen wurde.
- `gl.TIMEOUT_EXPIRED`: Gibt an, dass die `timeout`-Zeit abgelaufen ist und das Sync-Objekt nicht signalisiert wurde.
- `gl.CONDITION_SATISFIED`: Gibt an, dass das Sync-Objekt vor Ablauf des `timeout` signalisiert wurde.
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

- {{domxref("WebGLSync")}}
