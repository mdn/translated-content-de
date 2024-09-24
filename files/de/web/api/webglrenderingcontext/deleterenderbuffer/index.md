---
title: "WebGLRenderingContext: Methode deleteRenderbuffer()"
short-title: deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteRenderbuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes {{domxref("WebGLRenderbuffer")}}-Objekt. Diese Methode hat keine Auswirkungen, wenn der Renderpuffer bereits gelöscht wurde.

## Syntax

```js-nolint
deleteRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein {{domxref("WebGLRenderbuffer")}}-Objekt, das gelöscht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen eines Renderpuffers

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

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Weitere Puffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
