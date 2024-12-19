---
title: WEBGL_compressed_texture_etc1 Erweiterung
short-title: WEBGL_compressed_texture_etc1
slug: Web/API/WEBGL_compressed_texture_etc1
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_etc1`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt das [ETC1-Komprimierte-Texturformat](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) bereit.

Komprimierte Texturen verringern den Speicherbedarf, der für die Speicherung einer Textur auf der GPU benötigt wird, und ermöglichen damit hochauflösendere Texturen oder mehr Texturen bei gleicher Auflösung.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl in [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexten verfügbar.

## Konstanten

Das komprimierte Texturformat wird durch eine Konstante bereitgestellt und kann mit der Methode [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) verwendet werden (beachten Sie, dass ETC1 **nicht** mit der Methode [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) unterstützt wird).

- `ext.COMPRESSED_RGB_ETC1_WEBGL`
  - : Komprimiert 24-Bit-RGB-Daten ohne Alphakanal.

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_etc1");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGB_ETC1_WEBGL,
  512,
  512,
  0,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc) (ETC2 und EAC)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
