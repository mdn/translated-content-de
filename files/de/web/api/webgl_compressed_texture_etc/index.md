---
title: WEBGL_compressed_texture_etc-Erweiterung
short-title: WEBGL_compressed_texture_etc
slug: Web/API/WEBGL_compressed_texture_etc
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`WEBGL_compressed_texture_etc`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt 10 [komprimierte ETC/EAC-Texturformate](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) bereit.

Komprimierte Texturen benötigen weniger Speicherplatz auf der GPU. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch 10 Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_R11_EAC`
  - : Komprimierung eines vorzeichenlosen Formats mit einem Kanal (Rot).
- `ext.COMPRESSED_SIGNED_R11_EAC`
  - : Komprimierung eines vorzeichenbehafteten Formats mit einem Kanal (Rot).
- `ext.COMPRESSED_RG11_EAC`
  - : Komprimierung eines vorzeichenlosen Formats mit zwei Kanälen (Rot und Grün).
- `ext.COMPRESSED_SIGNED_RG11_EAC`
  - : Komprimierung eines vorzeichenbehafteten Formats mit zwei Kanälen (Rot und Grün).
- `ext.COMPRESSED_RGB8_ETC2`
  - : Komprimiert RGB8-Daten ohne Alphakanal.
- `ext.COMPRESSED_RGBA8_ETC2_EAC`
  - : Komprimiert RGBA8-Daten. Der RGB-Teil wird wie bei `RGB_ETC2` kodiert, der Alphateil jedoch separat.
- `ext.COMPRESSED_SRGB8_ETC2`
  - : Komprimiert sRGB8-Daten ohne Alphakanal.
- `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
  - : Komprimiert sRGBA8-Daten. Der sRGB-Teil wird wie bei `SRGB_ETC2` kodiert, der Alphateil jedoch separat.
- `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `RGB8_ETC`, ermöglicht aber einen Punchthrough-Alphakanal, durch den ein Pixel entweder vollständig deckend oder vollständig transparent ist.
- `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `SRGB8_ETC`, ermöglicht aber einen Punchthrough-Alphakanal, durch den ein Pixel entweder vollständig deckend oder vollständig transparent ist.

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_etc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA8_ETC2_EAC,
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

### Hinweise zur Kompatibilität

- Von Firefox 46 bis Firefox 51 hieß diese Erweiterung `WEBGL_compressed_texture_es3` und war im WebGL-2-Kontext standardmäßig verfügbar. Das ist nicht mehr der Fall. Sie müssen die Erweiterung sowohl in WebGL-1- als auch in WebGL-2-Kontexten aktivieren, um sie verwenden zu können.

## Siehe auch

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1) (ETC1)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
