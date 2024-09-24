---
title: "WebGL2RenderingContext: renderbufferStorageMultisample() Methode"
short-title: renderbufferStorageMultisample()
slug: Web/API/WebGL2RenderingContext/renderbufferStorageMultisample
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.renderbufferStorageMultisample()`** Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher eines Renderpufferobjekts und ermöglicht die Angabe einer Anzahl von zu verwendenden Samples.

## Syntax

```js-nolint
renderbufferStorageMultisample(target, samples, internalFormat, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel-Renderpufferobjekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Puffer-Datenablage für einzelne Bilder in einem renderbaren internen Format.

- `samples`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Anzahl der zu verwendenden Samples für die Renderpuffer-Speicherung angibt.
- `internalFormat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das interne Format des Renderpuffers angibt. Mögliche Werte (unterstützt `gl.DEPTH_STENCIL` nicht):

    - `gl.R8`
    - `gl.R8UI`
    - `gl.R8I`
    - `gl.R16UI`
    - `gl.R16I`
    - `gl.R32UI`
    - `gl.R32I`
    - `gl.RG8`
    - `gl.RG8UI`
    - `gl.RG8I`
    - `gl.RG16UI`
    - `gl.RG16I`
    - `gl.RG32UI`
    - `gl.RG32I`
    - `gl.RGB8`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGBA4`
    - `gl.RGB565`
    - `gl.RGB5_A1`
    - `gl.RGB10_A2`
    - `gl.RGBA8UI`
    - `gl.RGBA8I`
    - `gl.RGB10_A2UI`
    - `gl.RGBA16UI`
    - `gl.RGBA16I`
    - `gl.RGBA32I`
    - `gl.RGBA32UI`
    - `gl.DEPTH_COMPONENT16`
    - `gl.DEPTH_COMPONENT24`
    - `gl.DEPTH_COMPONENT32F`
    - `gl.DEPTH_STENCIL`
    - `gl.DEPTH24_STENCIL8`
    - `gl.DEPTH32F_STENCIL8`
    - `gl.STENCIL_INDEX8`

- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite des Renderpuffers in Pixeln angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe des Renderpuffers in Pixeln angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RGBA4, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
