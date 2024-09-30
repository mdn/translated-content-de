---
title: "WebGLRenderingContext: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.createBuffer()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert einen [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der Daten wie Vertices oder Farben speichert.

## Syntax

```js-nolint
createBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer), der Daten wie Vertices oder Farben speichert.

## Beispiele

### Erstellen eines Buffers

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
