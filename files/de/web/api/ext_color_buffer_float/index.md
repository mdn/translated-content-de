---
title: EXT_color_buffer_float-Erweiterung
short-title: EXT_color_buffer_float
slug: Web/API/EXT_color_buffer_float
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_color_buffer_float`**-Erweiterung ist Teil von [WebGL](/de/docs/Web/API/WebGL_API) und fügt die Fähigkeit hinzu, verschiedene Fließkommaformate zu rendern.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen lesen Sie bitte [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}-Kontexte verfügbar.
>
> Für {{domxref("WebGLRenderingContext", "WebGL 1", "", 1)}} siehe die {{domxref("EXT_color_buffer_half_float")}} und {{domxref("WEBGL_color_buffer_float")}} Erweiterungen.

## Erweiterte Methoden

Die folgenden formatierten Größen werden **farben-renderbar**:

- `gl.R16F`,
- `gl.RG16F`,
- `gl.RGBA16F`,
- `gl.R32F`,
- `gl.RG32F`,
- `gl.RGBA32F`,
- `gl.R11F_G11F_B10F`.

**Farben-renderbar** bedeutet:

- Die Methode {{domxref("WebGLRenderingContext.renderbufferStorage()")}} akzeptiert jetzt diese Formate.
- Framebuffer mit Texturen dieser Formate können jetzt **FRAMEBUFFER_COMPLETE** sein.

## Beispiele

`gl` muss ein {{domxref("WebGL2RenderingContext")}} sein. Diese Erweiterung funktioniert nicht in WebGL 1-Kontexten.

```js
const ext = gl.getExtension("EXT_color_buffer_float");

gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA16F, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("WEBGL_color_buffer_float")}}
