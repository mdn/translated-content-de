---
title: WEBGL_compressed_texture_pvrtc Erweiterung
short-title: WEBGL_compressed_texture_pvrtc
slug: Web/API/WEBGL_compressed_texture_pvrtc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_pvrtc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet Zugriff auf vier [PVRTC komprimierte Texturformate](https://en.wikipedia.org/wiki/PVRTC).

Komprimierte Texturen reduzieren die Speichermenge, die benötigt wird, um eine Textur auf der GPU zu speichern. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> PVRTC ist typischerweise nur auf mobilen Geräten mit PowerVR-Chipsätzen verfügbar.
> Es wird in allen Generationen des iPhone, iPod Touch und iPad verwendet und unterstützt bestimmte Android-Geräte, die eine PowerVR-GPU verwenden.
>
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}- als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexte verfügbar.

> [!NOTE]
> Auf iOS-Geräten wird diese Erweiterung `WEBKIT_WEBGL_compressed_texture_pvrtc` genannt.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) (bei der die Parameter `height` und `width` Potenzen von 2 sein müssen) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) (bei der die Höhe und Breite den aktuellen Werten der vorhandenen Textur entsprechen und die Parameter `xoffset` und `yoffset` 0 sein müssen).

- `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
  - : RGB-Kompression im 4-Bit-Modus. Ein Block für jeweils 4×4 Pixel.
- `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
  - : RGBA-Kompression im 4-Bit-Modus. Ein Block für jeweils 4×4 Pixel.
- `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
  - : RGB-Kompression im 2-Bit-Modus. Ein Block für jeweils 8×4 Pixel.
- `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`
  - : RGBA-Kompression im 2-Bit-Modus. Ein Block für jeweils 8×4 Pixel.

## Beispiele

```js
const ext = gl.getExtension("WEBGL_compressed_texture_pvrtc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
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

- [PVRTC Texture Compression – Wikipedia](https://en.wikipedia.org/wiki/PVRTC)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
