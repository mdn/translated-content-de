---
title: WEBGL_compressed_texture_pvrtc Erweiterung
short-title: WEBGL_compressed_texture_pvrtc
slug: Web/API/WEBGL_compressed_texture_pvrtc
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_compressed_texture_pvrtc`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und bietet Zugriff auf vier [PVRTC-komprimierte Texturformate](https://en.wikipedia.org/wiki/PVRTC).

Komprimierte Texturen reduzieren den Speicherbedarf einer Textur auf der GPU, was höhere Auflösungen oder mehr Texturen der gleichen Auflösung ermöglicht.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> PVRTC ist typischerweise nur auf mobilen Geräten mit PowerVR-Chipsets verfügbar.
> Es wird in allen Generationen des iPhone, iPod Touch und iPad verwendet und auf bestimmten Android-Geräten unterstützt, die eine PowerVR-GPU verwenden.
>
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

> [!NOTE]
> Auf iOS-Geräten wird diese Erweiterung `WEBKIT_WEBGL_compressed_texture_pvrtc` genannt.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} (dabei müssen die Parameter `height` und `width` Potenzen von 2 sein) und {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}} (dabei müssen die Parameter Höhe und Breite den aktuellen Werten der bestehenden Textur entsprechen und die Parameter `xoffset` und `yoffset` müssen 0 sein).

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
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
