---
title: "WebGLRenderingContext: createBuffer()-Methode"
short-title: createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createBuffer()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert einen {{domxref("WebGLBuffer")}}, der Daten wie Vertices oder Farben speichert.

## Syntax

```js-nolint
createBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLBuffer")}}, der Daten wie Vertices oder Farben speichert.

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

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Andere Buffer: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
