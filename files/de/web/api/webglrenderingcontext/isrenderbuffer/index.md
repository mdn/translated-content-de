---
title: "WebGLRenderingContext: Methode isRenderbuffer()"
short-title: isRenderbuffer()
slug: Web/API/WebGLRenderingContext/isRenderbuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.isRenderbuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) gibt `true` zurück, wenn der übergebene [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer) gültig ist, andernfalls `false`.

## Syntax

```js-nolint
isRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein zu prüfender [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer). Die Übergabe von `null` gibt `false` zurück.

### Rückgabewert

Ein [`GLboolean`](/de/docs/Web/API/WebGL_API/Types), der angibt, ob der Renderbuffer gültig ist.

## Beispiele

### Einen Renderbuffer prüfen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderbuffer = gl.createRenderbuffer();

gl.isRenderbuffer(renderbuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
