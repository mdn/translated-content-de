---
title: "WebGL2RenderingContext: readBuffer() Methode"
short-title: readBuffer()
slug: Web/API/WebGL2RenderingContext/readBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.readBuffer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) wählt einen Farb-Buffer als Quelle für Pixel für nachfolgende Aufrufe von [`copyTexImage2D`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D), [`copyTexSubImage2D`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D), [`copyTexSubImage3D`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D) oder [`readPixels`](/de/docs/Web/API/WebGLRenderingContext/readPixels) aus.

## Syntax

```js-nolint
readBuffer(source)
```

### Parameter

- `source`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Farb-Buffer angibt. Mögliche Werte:

    - `gl.BACK`
      - : Liest aus dem hinteren Farb-Buffer.
    - `gl.NONE`
      - : Liest aus keinem Farb-Buffer.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Liest aus einem der 16 Farb-Anhang-Buffer.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.readBuffer(gl.COLOR_ATTACHMENT0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.copyTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D)
- [`WebGLRenderingContext.copyTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D)
- [`WebGL2RenderingContext.copyTexSubImage3D()`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D)
- [`WebGLRenderingContext.readPixels()`](/de/docs/Web/API/WebGLRenderingContext/readPixels)
