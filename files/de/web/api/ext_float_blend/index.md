---
title: EXT_float_blend-Erweiterung
short-title: EXT_float_blend
slug: Web/API/EXT_float_blend
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die `EXT_float_blend`-Erweiterung der [WebGL-API](/de/docs/Web/API/WebGL_API) ermöglicht das Blending und Zeichnungs-Puffer mit 32-Bit-Floating-Point-Komponenten.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen lesen Sie bitte auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung steht sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte zur Verfügung. Um sie jedoch zu verwenden, müssen Sie die Verwendung von 32-Bit-Floating-Point-Zeichnungspuffern durch Aktivierung der Erweiterung [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) (für WebGL1) oder [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) (für WebGL2) ermöglichen. Dadurch wird `EXT_float_blend` automatisch aktiviert, aber nur, wenn `EXT_float_blend` ebenfalls unterstützt wird. Die Unterstützung von `EXT_color_buffer_float` impliziert nicht die Unterstützung von `EXT_float_blend`.

Wenn diese Erweiterung aktiviert ist, führt der Aufruf von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) oder [`drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) mit aktiviertem Blending und einem Zeichnungspuffer mit 32-Bit-Floating-Point-Komponenten nicht mehr zu einem `INVALID_OPERATION`-Fehler.

## Hinweise zur Verwendung

Auf Geräten, die die `EXT_float_blend`-Erweiterung unterstützen, wird sie automatisch und implizit aktiviert, wenn eine oder mehrere der Erweiterungen [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float), [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) oder [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) aktiviert sind. Dies gewährleistet, dass Inhalte, die vor der Einführung von `EXT_float_blend` durch WebGL erstellt wurden, wie erwartet funktionieren.

## Beispiele

```js
const gl = canvas.getContext("webgl2");

// enable necessary extensions
gl.getExtension("EXT_color_buffer_float");
gl.getExtension("EXT_float_blend");

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);

// use floating point format
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, 1, 1, 0, gl.RGBA, gl.FLOAT, null);

const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.TEXTURE_2D,
  tex,
  0,
);

// enable blending
gl.enable(gl.BLEND);

gl.drawArrays(gl.POINTS, 0, 1);
// won't throw gl.INVALID_OPERATION with the extension enabled
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL-API](/de/docs/Web/API/WebGL_API)
- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)
- [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
