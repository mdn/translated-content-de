---
title: "WebGL2RenderingContext: readBuffer()-Methode"
short-title: readBuffer()
slug: Web/API/WebGL2RenderingContext/readBuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.readBuffer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) wählt einen Farb-Puffer als Quelle für Pixel für nachfolgende Aufrufe von [`copyTexImage2D`](/de/docs/Web/API/WebGLRenderingContext/copyTexImage2D), [`copyTexSubImage2D`](/de/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D), [`copyTexSubImage3D`](/de/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D) oder [`readPixels`](/de/docs/Web/API/WebGLRenderingContext/readPixels) aus.

## Syntax

```js-nolint
readBuffer(source)
```

### Parameter

- `source`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Farb-Puffer angibt. Mögliche Werte:

    - `gl.BACK`
      - : Liest vom hinteren Farb-Puffer.
    - `gl.NONE`
      - : Liest von keinem Farb-Puffer.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Liest von einem der 16 Farb-Anhangs-Puffer.

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
