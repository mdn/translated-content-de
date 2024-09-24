---
title: "WebGLRenderingContext: Methode deleteTexture()"
short-title: deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die Methode **`WebGLRenderingContext.deleteTexture()`** der
[WebGL-API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes
{{domxref("WebGLTexture")}}-Objekt. Diese Methode hat keine Wirkung, wenn die Textur bereits gelöscht wurde.

## Syntax

```js-nolint
deleteTexture(texture)
```

### Parameter

- `texture`
  - : Ein zu löschendes {{domxref("WebGLTexture")}}-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Löschen einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();

// …

gl.deleteTexture(texture);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
