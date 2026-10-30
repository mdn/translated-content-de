---
title: WEBGL_compressed_texture_pvrtc-Erweiterung
short-title: WEBGL_compressed_texture_pvrtc
slug: Web/API/WEBGL_compressed_texture_pvrtc
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`WEBGL_compressed_texture_pvrtc`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt vier [komprimierte PVRTC-Texturformate](https://en.wikipedia.org/wiki/PVRTC) bereit.

Komprimierte Texturen verringern den Speicherbedarf einer Textur auf der GPU. Dadurch können Texturen mit höherer Auflösung oder mehr Texturen mit derselben Auflösung verwendet werden.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> PVRTC ist in der Regel nur auf Mobilgeräten mit PowerVR-Chipsätzen verfügbar.
> Es wird in allen Generationen von iPhone, iPod Touch und iPad verwendet und auf bestimmten Android-Geräten mit einer PowerVR-GPU unterstützt.
>
> Diese Erweiterung ist sowohl in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch in [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar.

> [!NOTE]
> Auf iOS-Geräten heißt diese Erweiterung `WEBKIT_WEBGL_compressed_texture_pvrtc`.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) (wobei die Parameter `height` und `width` Zweierpotenzen sein müssen) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D) (wobei die Parameter `height` und `width` den aktuellen Werten der vorhandenen Textur entsprechen und die Parameter `xoffset` und `yoffset` den Wert 0 haben müssen).

- `ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG`
  - : RGB-Komprimierung im 4-Bit-Modus. Ein Block für jeweils 4 × 4 Pixel.
- `ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG`
  - : RGBA-Komprimierung im 4-Bit-Modus. Ein Block für jeweils 4 × 4 Pixel.
- `ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG`
  - : RGB-Komprimierung im 2-Bit-Modus. Ein Block für jeweils 8 × 4 Pixel.
- `ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG`
  - : RGBA-Komprimierung im 2-Bit-Modus. Ein Block für jeweils 8 × 4 Pixel.

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

- [PVRTC-Texturkomprimierung – Wikipedia](https://en.wikipedia.org/wiki/PVRTC)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
