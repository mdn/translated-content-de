---
title: "WebGL2RenderingContext: compressedTexSubImage3D()-Methode"
short-title: compressedTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexSubImage3D
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.compressedTexSubImage3D()`**-Methode der [WebGL API](/de/docs/Web/API/WebGL_API) legt ein dreidimensionales Unterrechteck für ein Texturbild im komprimierten Format fest.

## Syntax

```js-nolint
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset)

compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der den Bindungspunkt (Ziel) der aktiven Textur angibt.
    Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Detailebene angibt. Ebene 0 ist die Basisebene des Bildes und Ebene _n_ ist die n-te Mipmap-Reduktionsstufe.
- `xoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den x-Versatz innerhalb des komprimierten Texturbildes angibt.
- `yoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den y-Versatz innerhalb des komprimierten Texturbildes angibt.
- `zoffset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den z-Versatz innerhalb des komprimierten Texturbildes angibt.
- `width`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Breite der Textur angibt.
- `height`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Höhe der Textur angibt.
- `depth`
  - : Ein [`GLsizei`](/de/docs/Web/API/WebGL_API/Types), das die Tiefe der Textur angibt.
- `format`

  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das das Format des komprimierten Bildes angibt. Mögliche Werte:

    - `gl.COMPRESSED_R11_EAC`
    - `gl.COMPRESSED_SIGNED_R11_EAC`
    - `gl.COMPRESSED_RG11_EAC`
    - `gl.COMPRESSED_SIGNED_RG11_EAC`
    - `gl.COMPRESSED_RGB8_ETC2`
    - `gl.COMPRESSED_RGBA8_ETC2_EAC`
    - `gl.COMPRESSED_SRGB8_ETC2`
    - `gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
    - `gl.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
    - `gl.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`

- `imageSize`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das die Anzahl der Bytes angibt, die aus dem Puffer gelesen werden sollen, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.
- `offset`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), das den Versatz in Bytes angibt, ab dem aus dem Puffer gelesen werden soll, der an `gl.PIXEL_UNPACK_BUFFER` gebunden ist.
- `srcData`
  - : Ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}-Objekt, das als Datenspeicher für die komprimierten Bilddaten im Speicher verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
gl.compressedTexSubImage3D(
  gl.TEXTURE_3D,
  0,
  0,
  0,
  512,
  512,
  512,
  gl.COMPRESSED_R11_EAC,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGL2RenderingContext.compressedTexImage3D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
