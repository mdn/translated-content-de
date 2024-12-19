---
title: EXT_texture_compression_rgtc Erweiterung
short-title: EXT_texture_compression_rgtc
slug: Web/API/EXT_texture_compression_rgtc
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGL")}}

Die `EXT_texture_compression_rgtc`-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt vier RGTC-komprimierte Texturformate zur Verfügung. RGTC ist ein blockbasiertes Texturkompressionsformat, das für vorzeichenbehaftete und vorzeichenlose Rot- und Rot-Grün-Texturen geeignet ist (**R**ed-**G**reen **T**exture **C**ompression).

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab. Es gibt keine Unterstützung unter Windows.
>
> Diese Erweiterung ist sowohl in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch in [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_RED_RGTC1_EXT`
  - : Jeder 4x4-Block von Texeln besteht aus 64 Bits vorzeichenlosem Rot-Bilddaten. Siehe auch [BC4 unsigned](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
  - : Jeder 4x4-Block von Texeln besteht aus 64 Bits vorzeichenbehafteten Rot-Bilddaten. Siehe auch [BC4 signed](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4x4-Block von Texeln besteht aus 64 Bits komprimierter vorzeichenloser Rot-Bilddaten, gefolgt von 64 Bits komprimierter vorzeichenloser Grün-Bilddaten. Siehe auch [BC5 unsigned](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).
- `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4x4-Block von Texeln besteht aus 64 Bits komprimierter vorzeichenbehafteter Rot-Bilddaten, gefolgt von 64 Bits komprimierter vorzeichenbehafteter Grün-Bilddaten. Siehe auch [BC5 signed](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).

## Beispiele

```js
const ext = gl.getExtension("EXT_texture_compression_rgtc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RED_RGTC1_EXT,
  128,
  128,
  0,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
