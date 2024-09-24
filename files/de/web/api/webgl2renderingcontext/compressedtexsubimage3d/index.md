---
title: "WebGL2RenderingContext: compressedTexSubImage3D()-Methode"
short-title: compressedTexSubImage3D()
slug: Web/API/WebGL2RenderingContext/compressedTexSubImage3D
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebGL")}}

Die **`WebGL2RenderingContext.compressedTexSubImage3D()`**-Methode des [WebGL-API](/de/docs/Web/API/WebGL_API) gibt ein dreidimensionales Unterrechteck für ein Texturbild im komprimierten Format an.

## Syntax

```js-nolint
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset)

compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset)
compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset, srcLengthOverride)
```

### Parameter

- `target`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das den Bindungspunkt (Ziel) der aktiven Textur spezifiziert. Mögliche Werte:

    - `gl.TEXTURE_3D`: Eine dreidimensionale Textur.
    - `gl.TEXTURE_2D_ARRAY`: Eine zweidimensionale Array-Textur.

- `level`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Detailstufe spezifiziert. Stufe 0 ist das Basisbildniveau und Stufe _n_ ist das n-te Mipmap-Reduktionsniveau.
- `xoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den x-Offset innerhalb des komprimierten Texturbildes spezifiziert.
- `yoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den y-Offset innerhalb des komprimierten Texturbildes spezifiziert.
- `zoffset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den z-Offset innerhalb des komprimierten Texturbildes spezifiziert.
- `width`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Breite der Textur spezifiziert.
- `height`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Höhe der Textur spezifiziert.
- `depth`
  - : Ein {{domxref("WebGL_API/Types", "GLsizei")}}, das die Tiefe der Textur spezifiziert.
- `format`

  - : Ein {{domxref("WebGL_API/Types", "GLenum")}}, das das komprimierte Bildformat spezifiziert. Mögliche Werte:

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
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das die Anzahl der Bytes angibt, die aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden sollen.
- `offset`
  - : Ein {{domxref("WebGL_API/Types", "GLint")}}, das den Offset in Bytes angibt, ab dem aus dem an `gl.PIXEL_UNPACK_BUFFER` gebundenen Puffer gelesen werden soll.
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

- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D", "WebGL2RenderingContext.compressedTexImage3D()")}}
