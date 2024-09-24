---
title: WEBGL_compressed_texture_s3tc_srgb Erweiterung
short-title: WEBGL_compressed_texture_s3tc_srgb
slug: Web/API/WEBGL_compressed_texture_s3tc_srgb
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_s3tc_srgb`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet vier [S3TC-komprimierte Texturformate](https://en.wikipedia.org/wiki/S3_Texture_Compression) für den sRGB-Farbraum.

Komprimierte Texturen reduzieren den Speicherbedarf für Texturen auf der GPU, was höhere Auflösungen oder mehr Texturen derselben Auflösung ermöglicht.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} und {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_SRGB_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im sRGB-Bildformat.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im sRGB-Bildformat mit einem einfachen Ein/Aus-Alpha-Wert.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT`
  - : Ein DXT3-komprimiertes Bild im sRGBA-Bildformat.
- `ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT`
  - : Ein DXT5-komprimiertes Bild im sRGBA-Bildformat.

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
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
