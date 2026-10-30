---
title: WEBGL_compressed_texture_etc1-Erweiterung
short-title: WEBGL_compressed_texture_etc1
slug: Web/API/WEBGL_compressed_texture_etc1
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WEBGL_compressed_texture_etc1`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt das [komprimierte Texturformat ETC1](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) bereit.

Komprimierte Texturen verringern den Speicherbedarf einer Textur auf der GPU. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl in [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2-Kontexten](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

Das komprimierte Texturformat wird durch eine Konstante bereitgestellt und kann mit der Methode [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) verwendet werden. Beachten Sie, dass ETC1 von der Methode [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) **nicht** unterstützt wird.

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
