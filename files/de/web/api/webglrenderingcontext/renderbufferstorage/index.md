---
title: "WebGLRenderingContext: renderbufferStorage()-Methode"
short-title: renderbufferStorage()
slug: Web/API/WebGLRenderingContext/renderbufferStorage
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.renderbufferStorage()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert einen Datenspeicher für ein Renderbuffer-Objekt.

## Syntax

```js-nolint
renderbufferStorage(target, internalFormat, width, height)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Datenspeicher im Puffer für einzelne Bilder in einem renderbaren internen Format.

- `internalFormat`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das interne Format des Renderbuffers angibt. Mögliche
    Werte:

    - `gl.RGBA4`: 4 Rot-Bits, 4 Grün-Bits, 4 Blau-Bits, 4 Alpha-Bits.
    - `gl.RGB565`: 5 Rot-Bits, 6 Grün-Bits, 5 Blau-Bits.
    - `gl.RGB5_A1`: 5 Rot-Bits, 5 Grün-Bits, 5 Blau-Bits, 1 Alpha-Bit.
    - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
    - `gl.STENCIL_INDEX8`: 8 Stencil-Bits.
    - `gl.DEPTH_STENCIL`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}}
    stehen zusätzlich folgende Werte zur Verfügung:

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

    Bei Verwendung der {{domxref("WEBGL_color_buffer_float")}}-Erweiterung:

    - `ext.RGBA32F_EXT`: RGBA 32-Bit-Gleitkommertyp.
    - `ext.RGB32F_EXT`: RGB 32-Bit-Gleitkommertyp.

    Bei Verwendung der {{domxref("EXT_sRGB")}}-Erweiterung:

    - `ext.SRGB8_ALPHA8_EXT`: 8-Bit sRGB und Alpha.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2-Kontexts", "", 1)}} und
    der {{domxref("EXT_color_buffer_float")}}-Erweiterung:

    - `gl.R16F`
    - `gl.RG16F`
    - `gl.RGBA16F`
    - `gl.R32F`
    - `gl.RG32F`
    - `gl.RGBA32F`
    - `gl.R11F_G11F_B10F`

- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite des Renderbuffers in Pixel angibt.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe des Renderbuffers in Pixel angibt.

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

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_texture_norm16")}}
