---
title: EXT_color_buffer_float-Erweiterung
short-title: EXT_color_buffer_float
slug: Web/API/EXT_color_buffer_float
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_color_buffer_float`** ist Teil von [WebGL](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern in verschiedenen Gleitkommaformaten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL-2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar.
>
> Informationen zu [WebGL 1](/de/docs/Web/API/WebGLRenderingContext) finden Sie bei den Erweiterungen [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float) und [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float).

## Erweiterte Methoden

Die folgenden Formate mit festgelegter Größe können nun **als Farb-Renderziele verwendet werden**:

- `gl.R16F`,
- `gl.RG16F`,
- `gl.RGBA16F`,
- `gl.R32F`,
- `gl.RG32F`,
- `gl.RGBA32F`,
- `gl.R11F_G11F_B10F`.

Das bedeutet:

- Die Methode [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) akzeptiert jetzt diese Formate.
- Framebuffer mit angehängten Texturen in diesen Formaten können jetzt den Status **FRAMEBUFFER_COMPLETE** erreichen.

## Beispiele

`gl` muss ein [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) sein. Diese Erweiterung funktioniert nicht in WebGL-1-Kontexten.

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
