---
title: WEBGL_color_buffer_float-Erweiterung
short-title: WEBGL_color_buffer_float
slug: Web/API/WEBGL_color_buffer_float
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WEBGL_color_buffer_float`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern in 32-Bit-Gleitkomma-Farbpuffer.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL 1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. Verwenden Sie für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float).
>
> Die Erweiterung [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) aktiviert diese Erweiterung implizit.

## Konstanten

- `ext.RGBA32F_EXT`
  - : RGBA-Format mit 32-Bit-Gleitkommawerten, das als Renderziel für Farben verwendet werden kann.
- `ext.RGB32F_EXT` ({{deprecated_inline}})
  - : RGB-Format mit 32-Bit-Gleitkommawerten, das als Renderziel für Farben verwendet werden kann.
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
