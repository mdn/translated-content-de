---
title: EXT_color_buffer_half_float-Erweiterung
short-title: EXT_color_buffer_half_float
slug: Web/API/EXT_color_buffer_half_float
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_color_buffer_half_float`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt die Möglichkeit hinzu, auf 16-Bit-Gleitkomma-Farbpuffer zu rendern.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}- als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexte verfügbar. Auf WebGL 2 ist sie eine Alternative zur Verwendung der {{domxref("EXT_color_buffer_float")}}-Erweiterung auf Plattformen, die 16-Bit-Gleitkomma-Render-Ziele, aber keine 32-Bit-Gleitkomma-Render-Ziele unterstützen.
>
> Die {{domxref("OES_texture_half_float")}}-Erweiterung aktiviert implizit diese Erweiterung.

## Konstanten

- `ext.RGBA16F_EXT`
  - : RGBA 16-Bit-Gleitkomma-Farb-renderbares Format.
- `ext.RGB16F_EXT`
  - : RGB 16-Bit-Gleitkomma-Farb-renderbares Format.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.renderbufferStorage()")}}:

- Der Parameter `internalformat` akzeptiert nun `ext.RGBA16F_EXT` und `ext.RGBA16F_EXT`.

## Beispiele

```js
const ext = gl.getExtension("EXT_color_buffer_half_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16F_EXT, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("OES_texture_half_float")}}
