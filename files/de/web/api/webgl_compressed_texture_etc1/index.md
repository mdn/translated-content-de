---
title: WEBGL_compressed_texture_etc1-Erweiterung
short-title: WEBGL_compressed_texture_etc1
slug: Web/API/WEBGL_compressed_texture_etc1
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_etc1`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt das [ETC1 komprimierte Texturformat](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) bereit.

Komprimierte Texturen verringern den Speicherbedarf, der notwendig ist, um eine Textur auf der GPU zu speichern, was höhere Auflösungstexturen oder mehr Texturen gleicher Auflösung ermöglicht.

WebGL-Erweiterungen sind mithilfe der Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch in {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexten verfügbar.

## Konstanten

Das komprimierte Texturformat wird durch eine Konstante bereitgestellt und kann mit der Methode {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} verwendet werden (beachten Sie, dass ETC1 **nicht** mit der Methode {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}} unterstützt wird).

- `ext.COMPRESSED_RGB_ETC1_WEBGL`
  - : Komprimiert 24-Bit-RGB-Daten ohne Alpha-Kanal.

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

- [Ericsson Texture Compression – Wikipedia](https://de.wikipedia.org/wiki/Ericsson_Texture_Compression)
- {{domxref("WEBGL_compressed_texture_etc")}} (ETC2 und EAC)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
