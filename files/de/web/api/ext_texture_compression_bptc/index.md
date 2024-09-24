---
title: EXT_texture_compression_bptc Erweiterung
short-title: EXT_texture_compression_bptc
slug: Web/API/EXT_texture_compression_bptc
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGL")}}

Die `EXT_texture_compression_bptc` Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt 4 BPTC-komprimierte Texturformate bereit. Diese Kompressionsformate werden [BC7](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format) und [BC6H](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format) in [Microsofts DirectX API](https://learn.microsoft.com/en-us/windows/win32/direct3d11/texture-block-compression-in-direct3d-11) genannt.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Weitere Informationen finden Sie unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab. Es gibt keine Unterstützung auf Windows.
>
> Diese Erweiterung ist verfügbar in sowohl {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexten.

## Konstanten

Die komprimierten Texturformate werden durch 4 Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: {{domxref("WebGLRenderingContext.compressedTexImage2D", "compressedTexImage2D()")}} und {{domxref("WebGLRenderingContext.compressedTexSubImage2D", "compressedTexSubImage2D()")}}.

- `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
  - : Komprimiert 8-Bit-Festpunktdaten. Jeder 4x4 Block von Texeln besteht aus 128 Bit RGBA- oder Bilddaten. Siehe auch [BC7-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format).
- `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
  - : Komprimiert 8-Bit-Festpunktdaten. Jeder 4x4 Block von Texeln besteht aus 128 Bit SRGB_ALPHA- oder Bilddaten. Siehe auch [BC7-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format).
- `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
  - : Komprimiert hochdynamische Bereiche mit unterschriebenen Gleitkommawerten. Jeder 4x4 Block von Texeln besteht aus 128 Bit RGB-Daten. Er enthält nur RGB-Daten, daher ist der zurückgegebene Alphawert 1,0. Siehe auch [BC6H-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format).
- `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`
  - : Komprimiert hochdynamische Bereiche mit nicht unterschriebenen Gleitkommawerten. Jeder 4x4 Block von Texeln besteht aus 128 Bit RGB-Daten. Er enthält nur RGB-Daten, daher ist der zurückgegebene Alphawert 1,0. Siehe auch [BC6H-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format).

## Beispiele

```js
const ext = gl.getExtension("EXT_texture_compression_bptc");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.compressedTexImage2D(
  gl.TEXTURE_2D,
  0,
  ext.COMPRESSED_RGBA_BPTC_UNORM_EXT,
  128,
  128,
  0,
  textureData,
);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
