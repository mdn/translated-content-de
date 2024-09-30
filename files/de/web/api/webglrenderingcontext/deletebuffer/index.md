---
title: "WebGLRenderingContext: deleteBuffer()-Methode"
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.deleteBuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Diese Methode hat keine Wirkung, wenn der Buffer bereits gelöscht wurde. Normalerweise müssen Sie diese Methode nicht selbst aufrufen, da das Buffer-Objekt beim Dereferenzieren als frei markiert wird.

## Syntax

```js-nolint
deleteBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Buffer löschen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

// …

gl.deleteBuffer(buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.createBuffer()`](/de/docs/Web/API/WebGLRenderingContext/createBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
- Andere Buffers: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
