---
title: "WebGL2RenderingContext: renderbufferStorageMultisample() Methode"
short-title: renderbufferStorageMultisample()
slug: Web/API/WebGL2RenderingContext/renderbufferStorageMultisample
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.renderbufferStorageMultisample()`**-Methode der [WebGL 2 API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher eines Renderbuffer-Objekts und ermöglicht die Angabe einer Anzahl von zu verwendenden Mustern.

## Syntax

```js-nolint
renderbufferStorageMultisample(target, samples, internalFormat, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:
    - `gl.RENDERBUFFER`
      - : Pufferdatenablage für einzelne Bilder in einem renderbaren internen Format.

- `samples`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Anzahl der zu verwendenden Muster für die Renderbuffer-Speicherung angibt.
- `internalFormat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das interne Format des Renderbuffers angibt. Mögliche Werte (Unterstützt `gl.DEPTH_STENCIL` nicht):
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
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Renderbuffers in Pixel angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des Renderbuffers in Pixel angibt.

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

- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
