---
title: EXT_float_blend-Erweiterung
short-title: EXT_float_blend
slug: Web/API/EXT_float_blend
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung `EXT_float_blend` der [WebGL-API](/de/docs/Web/API/WebGL_API) ermöglicht Blending mit Draw-Buffern, deren Komponenten 32-Bit-Gleitkommazahlen sind.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar. Um sie zu verwenden, müssen Sie jedoch Draw-Buffer mit 32-Bit-Gleitkommakomponenten aktivieren: über die Erweiterung [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) (für WebGL1) oder [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) (für WebGL2). Dadurch wird auch `EXT_float_blend` automatisch aktiviert, sofern `EXT_float_blend` unterstützt wird. Die Unterstützung von `EXT_color_buffer_float` bedeutet nicht, dass auch `EXT_float_blend` unterstützt wird.

Wenn diese Erweiterung aktiviert ist, führt der Aufruf von [`drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays) oder [`drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements) bei aktiviertem Blending und einem Draw-Buffer mit 32-Bit-Gleitkommakomponenten nicht mehr zu einem `INVALID_OPERATION`-Fehler.

## Hinweise zur Verwendung

Auf Geräten, die die Erweiterung `EXT_float_blend` unterstützen, wird sie automatisch und implizit aktiviert, sobald mindestens eine der Erweiterungen [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float), [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) oder [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) aktiviert wird. Dadurch funktionieren Inhalte, die geschrieben wurden, bevor `EXT_float_blend` in WebGL verfügbar war, weiterhin wie erwartet.

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
- [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)
- [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)
- [`WebGLRenderingContext.drawArrays()`](/de/docs/Web/API/WebGLRenderingContext/drawArrays)
- [`WebGLRenderingContext.drawElements()`](/de/docs/Web/API/WebGLRenderingContext/drawElements)
