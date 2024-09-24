---
title: EXT_float_blend-Erweiterung
short-title: EXT_float_blend
slug: Web/API/EXT_float_blend
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die `EXT_float_blend`-Erweiterung des [WebGL API](/de/docs/Web/API/WebGL_API) ermöglicht das Mischen und Zeichnen von Puffer mit 32-Bit-Gleitkomponenten.

WebGL-Erweiterungen sind über die {{domxref("WebGLRenderingContext.getExtension()")}}-Methode verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}- als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexte verfügbar. Um sie jedoch zu verwenden, müssen Sie die Verwendung von 32-Bit-Gleitkomma-Zeichenpuffer ermöglichen, indem Sie die Erweiterung {{domxref("WEBGL_color_buffer_float")}} (für WebGL1) oder {{domxref("EXT_color_buffer_float")}} (für WebGL2) aktivieren. Dadurch wird `EXT_float_blend` automatisch ebenfalls aktiviert, wenn und nur wenn `EXT_float_blend` auch unterstützt wird. Die Unterstützung von `EXT_color_buffer_float` impliziert nicht die Unterstützung von `EXT_float_blend`.

Wenn diese Erweiterung aktiviert ist, führt das Aufrufen von {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} oder {{domxref("WebGLRenderingContext.drawElements", "drawElements()")}} mit aktiviertem Mischen und einem Zeichnungspuffer mit 32-Bit-Gleitkomponenten nicht mehr zu einem `INVALID_OPERATION`-Fehler.

## Anwendungshinweise

Auf Geräten, die die `EXT_float_blend`-Erweiterung unterstützen, wird sie automatisch, implizit aktiviert, wenn eine oder mehrere der folgenden Erweiterungen aktiviert sind: {{domxref("EXT_color_buffer_float")}}, {{domxref("OES_texture_float")}} oder {{domxref("WEBGL_color_buffer_float")}}. Dadurch wird sichergestellt, dass Inhalte, die vor der Einführung von `EXT_float_blend` in WebGL geschrieben wurden, wie erwartet funktionieren.

## Beispiele

```js
const gl = canvas.getContext("webgl2");

// notwendige Erweiterungen aktivieren
gl.getExtension("EXT_color_buffer_float");
gl.getExtension("EXT_float_blend");

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);

// Verwendung des Gleitkomma-Formats
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

// Blending aktivieren
gl.enable(gl.BLEND);

gl.drawArrays(gl.POINTS, 0, 1);
// wirft mit der aktivierten Erweiterung keinen gl.INVALID_OPERATION-Fehler
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API)
- [Verwendung von WebGL-Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
