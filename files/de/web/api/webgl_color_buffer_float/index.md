---
title: WEBGL_color_buffer_float-Erweiterung
short-title: WEBGL_color_buffer_float
slug: Web/API/WEBGL_color_buffer_float
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_color_buffer_float`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt die Fähigkeit hinzu, zu 32-Bit-Gleitkommafarbpuffern zu rendern.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}}-Kontexte verfügbar. Für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} verwenden Sie die [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)-Erweiterung.
>
> Die [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)-Erweiterung aktiviert diese Erweiterung implizit.

## Konstanten

- `ext.RGBA32F_EXT`
  - : RGBA 32-Bit Gleitkomma-Farb-Renderformat.
- `ext.RGB32F_EXT` ({{deprecated_inline}})
  - : RGB 32-Bit Gleitkomma-Farb-Renderformat.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage):

- Der Parameter `internalformat` akzeptiert nun `ext.RGBA32F_EXT` und `ext.RGB32F_EXT` ({{deprecated_inline}}).

## Beispiele

```js
const ext = gl.getExtension("WEBGL_color_buffer_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA32F_EXT, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
