---
title: WEBGL_compressed_texture_etc Erweiterung
short-title: WEBGL_compressed_texture_etc
slug: Web/API/WEBGL_compressed_texture_etc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_etc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt 10 [ETC/EAC-komprimierte Texturformate](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression) bereit.

Komprimierte Texturen verringern den Speicherbedarf für das Speichern einer Textur auf der GPU, was höhere Auflösungen oder mehr Texturen derselben Auflösung ermöglicht.

WebGL-Erweiterungen sind über die {{domxref("WebGLRenderingContext.getExtension()")}}-Methode verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist für sowohl {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch 10 Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} und {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_R11_EAC`
  - : Ein-Kanal- (rot) Kompression im nicht signierten Format.
- `ext.COMPRESSED_SIGNED_R11_EAC`
  - : Ein-Kanal- (rot) Kompression im signierten Format.
- `ext.COMPRESSED_RG11_EAC`
  - : Zwei-Kanal- (rot und grün) Kompression im nicht signierten Format.
- `ext.COMPRESSED_SIGNED_RG11_EAC`
  - : Zwei-Kanal- (rot und grün) Kompression im signierten Format.
- `ext.COMPRESSED_RGB8_ETC2`
  - : Komprimiert RGB8-Daten ohne Alphakanal.
- `ext.COMPRESSED_RGBA8_ETC2_EAC`
  - : Komprimiert RGBA8-Daten. Der RGB-Teil wird wie `RGB_ETC2` kodiert, aber der Alphateil wird separat kodiert.
- `ext.COMPRESSED_SRGB8_ETC2`
  - : Komprimiert sRGB8-Daten ohne Alphakanal.
- `ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`
  - : Komprimiert sRGBA8-Daten. Der sRGB-Teil wird wie `SRGB_ETC2` kodiert, aber der Alphateil wird separat kodiert.
- `ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `RGB8_ETC`, aber mit der Möglichkeit, den Alphakanal durchzustanzen, was bedeutet, ihn vollständig undurchsichtig oder transparent zu machen.
- `ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2`
  - : Ähnlich wie `SRGB8_ETC`, aber mit der Möglichkeit, den Alphakanal durchzustanzen, was bedeutet, ihn vollständig undurchsichtig oder transparent zu machen.

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

- Diese Erweiterung wurde von Firefox 46 bis Firefox 51 `WEBGL_compressed_texture_es3` genannt und war standardmäßig im WebGL 2-Kontext verfügbar – dies ist nicht mehr der Fall. Sie müssen es sowohl im WebGL 1- als auch im WebGL 2-Kontext aktivieren, um es verwenden zu können.

## Siehe auch

- [Ericsson Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/Ericsson_Texture_Compression)
- {{domxref("WEBGL_compressed_texture_etc1")}} (ETC1)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
