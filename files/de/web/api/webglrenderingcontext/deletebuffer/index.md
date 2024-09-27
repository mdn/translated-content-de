---
title: "WebGLRenderingContext: deleteBuffer()-Methode"
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteBuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht einen gegebenen
[`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer). Diese Methode hat keine Wirkung, wenn der Buffer bereits gelöscht wurde. Normalerweise müssen Sie diese Methode nicht selbst aufrufen. Wenn das Buffer-Objekt dereferenziert wird, wird es als frei markiert.

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

### Löschen eines Buffers

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
