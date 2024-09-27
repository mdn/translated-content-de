---
title: WEBGL_compressed_texture_s3tc_srgb Erweiterung
short-title: WEBGL_compressed_texture_s3tc_srgb
slug: Web/API/WEBGL_compressed_texture_s3tc_srgb
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_s3tc_srgb`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt vier [S3TC-komprimierte Texturformate](https://en.wikipedia.org/wiki/S3_Texture_Compression) für den sRGB-Farbraum bereit.

Komprimierte Texturen reduzieren die Menge an Speicher, die benötigt wird, um eine Textur auf der GPU zu speichern, was höhere Auflösungen oder mehr Texturen gleicher Auflösung ermöglicht.

WebGL-Erweiterungen sind mit der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung steht sowohl {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexten zur Verfügung.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild in einem sRGB-Bildformat.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild in einem sRGB-Bildformat mit einem einfachen An/Aus-Alpha-Wert.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
  - : Ein DXT3-komprimiertes Bild in einem sRGBA-Bildformat.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`
  - : Ein DXT5-komprimiertes Bild in einem sRGBA-Bildformat.

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_SRGB_S3TC_DXT1_EXT,
  512,
  512,
  0,
  textureData,
);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [S3 Texture Compression – OpenGL wiki](https://www.khronos.org/opengl/wiki/S3_Texture_Compression#sRGB_and_S3TC)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
