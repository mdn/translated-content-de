---
title: WEBGL_compressed_texture_s3tc-Erweiterung
short-title: WEBGL_compressed_texture_s3tc
slug: Web/API/WEBGL_compressed_texture_s3tc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_s3tc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt vier [S3TC-komprimierte Texturformate](https://en.wikipedia.org/wiki/S3_Texture_Compression) bereit.

Komprimierte Texturen reduzieren den benötigten Speicherplatz auf der GPU, was höhere Auflösungen oder mehr Texturen mit derselben Auflösung ermöglicht.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im RGB-Bildformat.
- `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im RGB-Bildformat mit einem einfachen Ein-/Aus-Alpha-Wert.
- `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
  - : Ein DXT3-komprimiertes Bild im RGBA-Bildformat. Im Vergleich zu einer 32-Bit-RGBA-Textur bietet es eine 4:1-Komprimierung.
- `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`
  - : Ein DXT5-komprimiertes Bild im RGBA-Bildformat. Es bietet ebenfalls eine 4:1-Komprimierung, unterscheidet sich jedoch in der Alpha-Komprimierung von der DXT3-Komprimierung.

## Beispiele

```js
const ext =
  gl.getExtension("WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
  gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA_S3TC_DXT5_EXT,
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

- [S3 Texture Compression – OpenGL-Wiki](https://www.khronos.org/opengl/wiki/S3_Texture_Compression)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
