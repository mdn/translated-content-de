---
title: EXT_texture_compression_bptc-Erweiterung
short-title: EXT_texture_compression_bptc
slug: Web/API/EXT_texture_compression_bptc
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung `EXT_texture_compression_bptc` ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt vier komprimierte BPTC-Texturformate bereit. In der [DirectX-API von Microsoft](https://learn.microsoft.com/en-us/windows/win32/direct3d11/texture-block-compression-in-direct3d-11) heißen diese Komprimierungsformate [BC7](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format) und [BC6H](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format).

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab. Unter Windows wird diese Erweiterung nicht unterstützt.
>
> Diese Erweiterung ist sowohl in [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2-Kontexten](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Konstanten

Die komprimierten Texturformate werden durch vier Konstanten bereitgestellt und können in zwei Funktionen verwendet werden: [`compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D) und [`compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D).

- `ext.COMPRESSED_RGBA_BPTC_UNORM_EXT`
  - : Komprimiert 8-Bit-Festkommadaten. Jeder 4×4-Block aus Texeln besteht aus 128 Bit RGBA- oder Bilddaten. Siehe auch [BC7-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format).
- `ext.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT`
  - : Komprimiert 8-Bit-Festkommadaten. Jeder 4×4-Block aus Texeln besteht aus 128 Bit SRGB_ALPHA- oder Bilddaten. Siehe auch [BC7-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc7-format).
- `ext.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT`
  - : Komprimiert vorzeichenbehaftete Gleitkommawerte mit hohem Dynamikumfang. Jeder 4×4-Block aus Texeln besteht aus 128 Bit RGB-Daten. Das Format enthält nur RGB-Daten; daher beträgt der zurückgegebene Alphawert 1,0. Siehe auch [BC6H-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format).
- `ext.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT`
  - : Komprimiert vorzeichenlose Gleitkommawerte mit hohem Dynamikumfang. Jeder 4×4-Block aus Texeln besteht aus 128 Bit RGB-Daten. Das Format enthält nur RGB-Daten; daher beträgt der zurückgegebene Alphawert 1,0. Siehe auch [BC6H-Format](https://learn.microsoft.com/en-us/windows/win32/direct3d11/bc6h-format).

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.compressedTexImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexImage2D)
- [`WebGLRenderingContext.compressedTexSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
