---
title: OES_texture_float-Erweiterung
short-title: OES_texture_float
slug: Web/API/OES_texture_float
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_float`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht Gleitkomma-Pixeltypen für Texturen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D):

- Der `type`-Parameter akzeptiert jetzt `gl.FLOAT`.
- Der `pixels`-Parameter akzeptiert jetzt ein {{jsxref("Float32Array")}}.

## Einschränkung: Lineares Filtern

Lineares Filtern auf Gleitkomma-Texturen ist mit dieser Erweiterung nicht erlaubt. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter in der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf einen von `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Gleitkomma-Texturen verwenden, wird die Textur als unvollständig markiert.

Um lineares Filtern auf Gleitkomma-Texturen zu verwenden, aktivieren Sie zusätzlich zur dieser Erweiterung die [`OES_texture_float_linear`](/de/docs/Web/API/OES_texture_float_linear)-Erweiterung.

## Gleitkomma-Farbpuffer

Diese Erweiterung aktiviert implizit die [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)-Erweiterung (falls unterstützt), die das Rendering zu 32-Bit-Gleitkomma-Farbpuffern ermöglicht.

## Beispiele

```js
const ext = gl.getExtension("OES_texture_float");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.FLOAT, image);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`OES_texture_float_linear`](/de/docs/Web/API/OES_texture_float_linear)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear)
