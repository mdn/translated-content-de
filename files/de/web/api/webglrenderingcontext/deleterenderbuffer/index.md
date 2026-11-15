---
title: "WebGLRenderingContext: Methode deleteRenderbuffer()"
short-title: deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteRenderbuffer()`** der [WebGL-API](/de/docs/Web/API/WebGL_API) löscht ein bestimmtes [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt. Wurde der Renderbuffer bereits gelöscht, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
deleteRenderbuffer(renderbuffer)
```

### Parameter

- `renderbuffer`
  - : Ein [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)-Objekt, das gelöscht werden soll. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Einen Renderbuffer löschen

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
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
