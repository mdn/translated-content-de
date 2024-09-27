---
title: "WebGLRenderingContext: renderbufferStorage() Methode"
short-title: renderbufferStorage()
slug: Web/API/WebGLRenderingContext/renderbufferStorage
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.renderbufferStorage()`** Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert den Datenspeicher eines Renderbuffer-Objekts.

## Syntax

```js-nolint
renderbufferStorage(target, internalFormat, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Speicherstruktur für Pufferdaten für Einzelbilder in einem renderbaren internen Format.

- `internalFormat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das interne Format des Renderbuffers spezifiziert. Mögliche Werte sind:

    - `gl.RGBA4`: 4 rote Bits, 4 grüne Bits, 4 blaue Bits, 4 Alpha-Bits.
    - `gl.RGB565`: 5 rote Bits, 6 grüne Bits, 5 blaue Bits.
    - `gl.RGB5_A1`: 5 rote Bits, 5 grüne Bits, 5 blaue Bits, 1 Alpha-Bit.
    - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
    - `gl.STENCIL_INDEX8`: 8 Schablonen-Bits.
    - `gl.DEPTH_STENCIL`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} sind zusätzlich folgende Werte verfügbar:

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
    - `gl.SRGB8_ALPHA8` (auch als Erweiterung für WebGL 1 verfügbar, siehe unten)
    - `gl.RGB10_A2`
    - `gl.RGBA8UI`
    - `gl.RGBA8I`
    - `gl.RGB10_A2UI`
    - `gl.RGBA16UI`
    - `gl.RGBA16I`
    - `gl.RGBA32I`
    - `gl.RGBA32UI`
    - `gl.DEPTH_COMPONENT24`
    - `gl.DEPTH_COMPONENT32F`
    - `gl.DEPTH24_STENCIL8`
    - `gl.DEPTH32F_STENCIL8`

    Bei Verwendung der [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) Erweiterung:

    - `ext.RGBA32F_EXT`: RGBA 32-Bit Gleitkomma-Typ.
    - `ext.RGB32F_EXT`: RGB 32-Bit Gleitkomma-Typ.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB) Erweiterung:

    - `ext.SRGB8_ALPHA8_EXT`: 8-Bit sRGB und Alpha.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} und der [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) Erweiterung:

    - `gl.R16F`
    - `gl.RG16F`
    - `gl.RGBA16F`
    - `gl.R32F`
    - `gl.RG32F`
    - `gl.RGBA32F`
    - `gl.R11F_G11F_B10F`

- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Breite des Renderbuffers in Pixeln angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), der die Höhe des Renderbuffers in Pixeln angibt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.bindRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindRenderbuffer)
- [`WebGLRenderingContext.createRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/createRenderbuffer)
- [`WebGLRenderingContext.deleteRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer)
- [`WebGLRenderingContext.getRenderbufferParameter()`](/de/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter)
- [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
- [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
