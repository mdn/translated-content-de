---
title: "WebGL2RenderingContext: readBuffer()-Methode"
short-title: readBuffer()
slug: Web/API/WebGL2RenderingContext/readBuffer
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.readBuffer()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) wählt einen Farb-Buffer als Quelle für Pixel für nachfolgende Aufrufe von {{domxref("WebGLRenderingContext.copyTexImage2D", "copyTexImage2D")}}, {{domxref("WebGLRenderingContext.copyTexSubImage2D", "copyTexSubImage2D")}}, {{domxref("WebGL2RenderingContext.copyTexSubImage3D", "copyTexSubImage3D")}} oder {{domxref("WebGLRenderingContext.readPixels", "readPixels")}} aus.

## Syntax

```js-nolint
readBuffer(source)
```

### Parameter

- `source`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, der einen Farb-Buffer angibt. Mögliche Werte:

    - `gl.BACK`
      - : Liest aus dem Back-Farb-Buffer.
    - `gl.NONE`
      - : Liest aus keinem Farb-Buffer.
    - `gl.COLOR_ATTACHMENT{0-15}`
      - : Liest aus einem der 16 Farb-Attachment-Buffer.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.readBuffer(gl.COLOR_ATTACHMENT0);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
- {{domxref("WebGLRenderingContext.readPixels()")}}
