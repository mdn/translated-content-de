---
title: "WebGLRenderingContext: deleteRenderbuffer() Methode"
short-title: deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteRenderbuffer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein gegebenes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) Objekt. Diese Methode hat keine Auswirkung, wenn der Render-Puffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Renderbuffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

// …

gl.deleteRenderbuffer(renderbuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.isRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/isRenderbuffer)
- Andere Puffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
