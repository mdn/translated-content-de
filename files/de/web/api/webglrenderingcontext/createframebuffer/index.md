---
title: "WebGLRenderingContext: createFramebuffer()-Methode"
short-title: createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createFramebuffer()`**-Methode der [WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt.

## Syntax

```js-nolint
createFramebuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt.

## Beispiele

### Erstellen eines Frame-Buffers

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)
- [`WebGLRenderingContext.deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer)
- [`WebGLRenderingContext.isFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/isFramebuffer)
- Andere Buffer: [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
