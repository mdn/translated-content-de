---
title: EXT_texture_compression_rgtc Erweiterung
short-title: EXT_texture_compression_rgtc
slug: Web/API/EXT_texture_compression_rgtc
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGL")}}

Die `EXT_texture_compression_rgtc` Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt 4 RGTC-komprimierte Texturformate zur Verfügung. RGTC ist ein blockbasiertes Texturkomprimierungsformat, das für unkomprimierte und komprimierte rot und rot-grün Texturen geeignet ist (**R**ed-**G**reen **T**exture **C**ompression).

WebGL-Erweiterungen sind mit der Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafikkartentreiber des Systems ab. Es gibt keine Unterstützung unter Windows.
>
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch 4 Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} und {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_RED_RGTC1_EXT`
  - : Jeder 4x4 Texelblock besteht aus 64 Bit unkomprimierten roten Bilddaten. Siehe auch [BC4 unkomprimiert](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_SIGNED_RED_RGTC1_EXT`
  - : Jeder 4x4 Texelblock besteht aus 64 Bit komprimierten roten Bilddaten. Siehe auch [BC4 komprimiert](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc4).
- `ext.COMPRESSED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4x4 Texelblock besteht aus 64 Bit komprimierten unkomprimierten roten Bilddaten, gefolgt von 64 Bit komprimierten unkomprimierten grünen Bilddaten. Siehe auch [BC5 unkomprimiert](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).
- `ext.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT`
  - : Jeder 4x4 Texelblock besteht aus 64 Bit komprimierten roten Bilddaten, gefolgt von 64 Bit komprimierten grünen Bilddaten. Siehe auch [BC5 komprimiert](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-block-compression#bc5).

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
