---
title: EXT_color_buffer_half_float Erweiterung
short-title: EXT_color_buffer_half_float
slug: Web/API/EXT_color_buffer_half_float
l10n:
  sourceCommit: afeab3b161634650ffd2439746308d8be23cc050
---

{{APIRef("WebGL")}}

Die **`EXT_color_buffer_half_float`** Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt die Möglichkeit hinzu, in 16-Bit Gleitkomma-Farbpuffer zu rendern.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen lesen Sie auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar. In WebGL 2 ist sie eine Alternative zur Verwendung der [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) Erweiterung auf Plattformen, die 16-Bit Gleitkomma-Renderziele unterstützen, aber nicht 32-Bit Gleitkomma-Renderziele.
>
> Die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung aktiviert implizit diese Erweiterung.

## Konstanten

- `ext.RGBA16F_EXT`
  - : RGBA 16-Bit Gleitkomma-Farb-renderbares Format.
- `ext.RGB16F_EXT`
  - : RGB 16-Bit Gleitkomma-Farb-renderbares Format.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : ?
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : ?

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage):

- Der Parameter `internalformat` akzeptiert nun `ext.RGBA16F_EXT` und `ext.RGB16F_EXT`.

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

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
