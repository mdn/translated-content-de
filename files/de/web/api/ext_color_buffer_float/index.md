---
title: EXT_color_buffer_float-Erweiterung
short-title: EXT_color_buffer_float
slug: Web/API/EXT_color_buffer_float
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_color_buffer_float`**-Erweiterung ist Teil von [WebGL](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern einer Vielzahl von Gleitkommaformaten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}-Kontexte verfügbar.
>
> Für {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} siehe die Erweiterungen [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float) und [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float).

## Erweiterte Methoden

Die folgenden Größenformate werden **color-renderable**:

- `gl.R16F`,
- `gl.RG16F`,
- `gl.RGBA16F`,
- `gl.R32F`,
- `gl.RG32F`,
- `gl.RGBA32F`,
- `gl.R11F_G11F_B10F`.

**Color-renderable** bedeutet:

- Die Methode [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) akzeptiert jetzt diese Formate.
- Framebuffers mit angehängten Texturen dieser Formate können jetzt **FRAMEBUFFER_COMPLETE** sein.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. Diese Erweiterung funktioniert nicht in WebGL 1-Kontexten.

```js
const ext = gl.getExtension("EXT_color_buffer_float");

gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA16F, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float)
- [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)
