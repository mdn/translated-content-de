---
title: WEBGL_compressed_texture_s3tc-Erweiterung
short-title: WEBGL_compressed_texture_s3tc
slug: Web/API/WEBGL_compressed_texture_s3tc
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`WEBGL_compressed_texture_s3tc`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt vier [S3TC-Formate für komprimierte Texturen](https://en.wikipedia.org/wiki/S3_Texture_Compression) bereit.

Komprimierte Texturen verringern den Speicherbedarf einer Textur auf der GPU. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl in [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2-Kontexten](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

Die Formate für komprimierte Texturen werden durch vier Konstanten bereitgestellt und können mit zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_RGB_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im RGB-Format.
- `ext.COMPRESSED_RGBA_S3TC_DXT1_EXT`
  - : Ein DXT1-komprimiertes Bild im RGB-Format mit einem binären Alphawert.
- `ext.COMPRESSED_RGBA_S3TC_DXT3_EXT`
  - : Ein DXT3-komprimiertes Bild im RGBA-Format. Gegenüber einer 32-Bit-RGBA-Textur bietet es eine Komprimierung im Verhältnis 4:1.
- `ext.COMPRESSED_RGBA_S3TC_DXT5_EXT`
  - : Ein DXT5-komprimiertes Bild im RGBA-Format. Es bietet ebenfalls eine Komprimierung im Verhältnis 4:1, unterscheidet sich von der DXT3-Komprimierung jedoch darin, wie der Alphakanal komprimiert wird.

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

- [S3 Texture Compression – OpenGL-Wiki](https://wikis.khronos.org/opengl/S3_Texture_Compression)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
