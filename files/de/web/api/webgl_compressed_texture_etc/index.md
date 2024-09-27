---
title: WEBGL_compressed_texture_etc Erweiterung
short-title: WEBGL_compressed_texture_etc
slug: Web/API/WEBGL_compressed_texture_etc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_etc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und offenbart 10 [ETC/EAC komprimierte Texturformate](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression).

Komprimierte Texturen reduzieren den Speicherbedarf für die Speicherung einer Textur auf der GPU und ermöglichen so Texturen mit höherer Auflösung oder mehr Texturen der gleichen Auflösung.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen, siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl im {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch im {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontext verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch 10 Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_R11_EAC`
  - : Kompression im ein-Kanal (rot) unsignierten Format.
- `ext.COMPRESSED_SIGNED_R11_EAC`
  - : Kompression im ein-Kanal (rot) signierten Format.
- `ext.COMPRESSED_RG11_EAC`
  - : Kompression im zwei-Kanal (rot und grün) unsignierten Format.
- `ext.COMPRESSED_SIGNED_RG11_EAC`
  - : Kompression im zwei-Kanal (rot und grün) signierten Format.
- `ext.COMPRESSED_RGB8_ETC2`
  - : Komprimiert RGB8 Daten ohne Alphakanal.
- `ext.COMPRESSED_RGBA8_ETC2_EAC`
  - : Komprimiert RGBA8 Daten. Der RGB-Teil wird wie bei `RGB_ETC2` kodiert, aber der Alphateil wird separat kodiert.
- `ext.COMPRESSED_SRGB8_ETC2`
  - : Komprimiert sRGB8 Daten ohne Alphakanal.
- `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
  - : Komprimiert sRGBA8 Daten. Der sRGB-Teil wird wie bei `SRGB_ETC2` kodiert, aber der Alphateil wird separat kodiert.
- `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `RGB8_ETC`, aber mit der Möglichkeit, den Alphakanal durchzuschlagen, was bedeutet, dass er vollständig deckend oder transparent gemacht werden kann.
- `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `SRGB8_ETC`, aber mit der Möglichkeit, den Alphakanal durchzuschlagen, was bedeutet, dass er vollständig deckend oder transparent gemacht werden kann.

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

### Kompatibilitätsnotizen

- Diese Erweiterung wurde von Firefox 46 bis Firefox 51 als `WEBGL_compressed_texture_es3` bezeichnet und war standardmäßig im WebGL 2 Kontext verfügbar - dies ist nicht mehr der Fall. Sie müssen sie sowohl im WebGL 1 als auch im WebGL 2 Kontext aktivieren, um sie verwenden zu können.

## Siehe auch

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1) (ETC1)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
