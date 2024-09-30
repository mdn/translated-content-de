---
title: "WebGLRenderingContext: renderbufferStorage() Methode"
short-title: renderbufferStorage()
slug: Web/API/WebGLRenderingContext/renderbufferStorage
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.renderbufferStorage()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) erstellt und initialisiert einen Datenspeicher für ein Renderbuffer-Objekt.

## Syntax

```js-nolint
renderbufferStorage(target, internalFormat, width, height)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das Ziel-Renderbuffer-Objekt angibt. Mögliche Werte:

    - `gl.RENDERBUFFER`
      - : Buffer-Datenspeicher für einzelne Bilder in einem renderbaren internen Format.

- `internalFormat`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der das interne Format des Renderbuffers angibt. Mögliche
    Werte:

    - `gl.RGBA4`: 4 Rot-Bits, 4 Grün-Bits, 4 Blau-Bits, 4 Alpha-Bits.
    - `gl.RGB565`: 5 Rot-Bits, 6 Grün-Bits, 5 Blau-Bits.
    - `gl.RGB5_A1`: 5 Rot-Bits, 5 Grün-Bits, 5 Blau-Bits, 1 Alpha-Bit.
    - `gl.DEPTH_COMPONENT16`: 16 Tiefen-Bits.
    - `gl.STENCIL_INDEX8`: 8 Stencil-Bits.
    - `gl.DEPTH_STENCIL`

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} sind zusätzlich die folgenden Werte verfügbar:

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

    Bei Verwendung der [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)-Erweiterung:

    - `ext.RGBA32F_EXT`: RGBA 32-Bit Fließkomma-Typ.
    - `ext.RGB32F_EXT`: RGB 32-Bit Fließkomma-Typ.

    Bei Verwendung der [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)-Erweiterung:

    - `ext.SRGB8_ALPHA8_EXT`: 8-Bit sRGB und Alpha.

    Bei Verwendung eines {{domxref("WebGL2RenderingContext", "WebGL 2 Kontexts", "", 1)}} und der [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)-Erweiterung:

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

Keine ({{jsxref("undefined")}}).

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
