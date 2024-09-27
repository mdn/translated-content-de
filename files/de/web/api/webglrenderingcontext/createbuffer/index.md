---
title: "WebGLRenderingContext: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createBuffer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erzeugt und initialisiert einen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der Daten wie beispielsweise Vertex- oder Farbinformationen speichert.

## Syntax

```js-nolint
createBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der Daten wie beispielsweise Vertex- oder Farbinformationen speichert.

## Beispiele

### Einen Buffer erstellen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindBuffer)
- [`WebGLRenderingContext.deleteBuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteBuffer)
- [`WebGLRenderingContext.isBuffer()`](/de/docs/Web/API/WebGLRenderingContext/isBuffer)
- Andere Buffers: [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
