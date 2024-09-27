---
title: "WebGLRenderingContext: deleteTexture()-Methode"
short-title: deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.deleteTexture()`**-Methode der
[WebGL API](/de/docs/Web/API/WebGL_API) löscht ein bestimmtes
[`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt. Diese Methode hat keine Wirkung, wenn die Textur bereits
gelöscht wurde.

## Syntax

```js-nolint
deleteTexture(texture)
```

### Parameter

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, das gelöscht werden soll.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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

- [`WebGLRenderingContext.bindTexture()`](/de/docs/Web/API/WebGLRenderingContext/bindTexture)
- [`WebGLRenderingContext.createTexture()`](/de/docs/Web/API/WebGLRenderingContext/createTexture)
- [`WebGLRenderingContext.isTexture()`](/de/docs/Web/API/WebGLRenderingContext/isTexture)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
