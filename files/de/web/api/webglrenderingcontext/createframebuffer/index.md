---
title: "WebGLRenderingContext: Methode createFramebuffer()"
short-title: createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.createFramebuffer()`**-Methode der
[WebGL-API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert ein
{{domxref("WebGLFramebuffer")}}-Objekt.

## Syntax

```js-nolint
createFramebuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("WebGLFramebuffer")}}-Objekt.

## Beispiele

### Erstellen eines Framebuffers

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

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Andere Buffer: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
