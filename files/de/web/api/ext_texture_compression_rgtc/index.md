---
title: EXT_texture_compression_rgtc-Erweiterung
short-title: EXT_texture_compression_rgtc
slug: Web/API/EXT_texture_compression_rgtc
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung `EXT_texture_compression_rgtc` ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt vier komprimierte RGTC-Texturformate bereit. RGTC ist ein blockbasiertes Texturkompressionsformat für vorzeichenlose und vorzeichenbehaftete Rot- und Rot-Grün-Texturen (**R**ed-**G**reen **T**exture **C**ompression).

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab. Unter Windows wird die Erweiterung nicht unterstützt.
>
> Diese Erweiterung ist sowohl für [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_RED_RGTC1_EXT`
  - : Jeder 4×4-Texel-Block besteht aus 64 Bit vorzeichenloser Rotbilddaten. Siehe auch [BC4 vorzeichenlos](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
  - : Jeder 4×4-Texel-Block besteht aus 64 Bit vorzeichenbehafteter Rotbilddaten. Siehe auch [BC4 vorzeichenbehaftet](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4×4-Texel-Block besteht aus 64 Bit komprimierter vorzeichenloser Rotbilddaten, gefolgt von 64 Bit komprimierter vorzeichenloser Grünbilddaten. Siehe auch [BC5 vorzeichenlos](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).
- `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4×4-Texel-Block besteht aus 64 Bit komprimierter vorzeichenbehafteter Rotbilddaten, gefolgt von 64 Bit komprimierter vorzeichenbehafteter Grünbilddaten. Siehe auch [BC5 vorzeichenbehaftet](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).

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
