---
title: "WebGLRenderingContext: Methode isBuffer()"
short-title: isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.isBuffer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene {{domxref("WebGLBuffer")}} gültig ist, und `false`, wenn nicht.

## Syntax

```js-nolint
isBuffer(buffer)
```

### Parameter

- `buffer`
  - : Ein {{domxref("WebGLBuffer")}}, der überprüft werden soll.

### Rückgabewert

Ein {{domxref("WebGL_API/Types", "GLboolean")}}, der angibt, ob der Buffer gültig ist oder nicht.

## Beispiele

### Erstellen eines Buffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.isBuffer(buffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- Andere Buffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
