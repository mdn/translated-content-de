---
title: "WebGLRenderingContext: Methode deleteTexture()"
short-title: deleteTexture()
slug: Web/API/WebGLRenderingContext/deleteTexture
l10n:
  sourceCommit: 742f106cbedfb40e6ebec554709d1ff9dcd29d52
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WebGLRenderingContext.deleteTexture()`** der [WebGL API](/de/docs/Web/API/WebGL_API) löscht ein angegebenes [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt. Wurde die Textur bereits gelöscht, hat diese Methode keine Wirkung.

## Syntax

```js-nolint
deleteTexture(texture)
```

### Parameter

- `texture`
  - : Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt, das gelöscht werden soll. Die Übergabe von `null` hat keine Wirkung.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine Textur löschen

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
