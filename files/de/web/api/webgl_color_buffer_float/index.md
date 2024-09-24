---
title: WEBGL_color_buffer_float Erweiterung
short-title: WEBGL_color_buffer_float
slug: Web/API/WEBGL_color_buffer_float
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_color_buffer_float`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern zu 32-Bit-Gleitkomma-Farbpuffern.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} Kontexte verfügbar. Für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}, verwenden Sie die {{domxref("EXT_color_buffer_float")}} Erweiterung.
>
> Die {{domxref("OES_texture_float")}} Erweiterung aktiviert implizit diese Erweiterung.

## Konstanten

- `ext.RGBA32F_EXT`
  - : RGBA 32-Bit-Gleitkomma-Farbrenderformat.
- `ext.RGB32F_EXT` ({{deprecated_inline}})
  - : RGB 32-Bit-Gleitkomma-Farbrenderformat.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.renderbufferStorage()")}}:

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("OES_texture_float")}}
