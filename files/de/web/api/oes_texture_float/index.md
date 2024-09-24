---
title: OES_texture_float Erweiterung
short-title: OES_texture_float
slug: Web/API/OES_texture_float
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_float`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht die Verwendung von Gleitkomma-Pixeltypen für Texturen.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar.

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.texImage2D()")}} und {{domxref("WebGLRenderingContext.texSubImage2D()")}}:

- Der `type` Parameter akzeptiert nun `gl.FLOAT`.
- Der `pixels` Parameter akzeptiert nun ein {{jsxref("Float32Array")}}.

## Einschränkung: Lineare Filterung

Lineare Filterung auf Gleitkomma-Texturen ist mit dieser Erweiterung nicht erlaubt. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter in der {{domxref("WebGLRenderingContext.texParameter()")}} Methode auf einen von `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Gleitkomma-Texturen verwenden, wird die Textur als unvollständig markiert.

Um lineare Filterung auf Gleitkomma-Texturen zu verwenden, aktivieren Sie zusätzlich zu dieser Erweiterung die {{domxref("OES_texture_float_linear")}} Erweiterung.

## Gleitkomma-Farbpuffer

Diese Erweiterung aktiviert implizit die {{domxref("WEBGL_color_buffer_float")}} Erweiterung (falls unterstützt), die das Rendern zu 32-Bit-Gleitkomma-Farbpuffern ermöglicht.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
