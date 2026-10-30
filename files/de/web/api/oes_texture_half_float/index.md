---
title: OES_texture_half_float-Erweiterung
short-title: OES_texture_half_float
slug: Web/API/OES_texture_half_float
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_texture_half_float`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt Texturformate mit 16-Bit- (auch „Half Float“ genannt) und 32-Bit-Gleitkommakomponenten hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) steht ihre Funktionalität standardmäßig im WebGL2-Kontext zur Verfügung. Die entsprechende Konstante in WebGL2 ist `gl.HALF_FLOAT`.

## Konstanten

- `ext.HALF_FLOAT_OES`
  - : Gleitkommatyp mit halber Genauigkeit (16 Bit).

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D):

- Der Parameter `type` akzeptiert nun `ext.HALF_FLOAT_OES`.

## Einschränkung: Lineare Filterung

Diese Erweiterung erlaubt keine lineare Filterung von Texturen mit Gleitkommawerten halber Genauigkeit. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter mit der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und solche Texturen verwenden, wird die Textur als unvollständig markiert.

Um Texturen mit Gleitkommawerten halber Genauigkeit linear zu filtern, aktivieren Sie zusätzlich die Erweiterung [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear).

## Farbpuffer mit Gleitkommawerten halber Genauigkeit

Diese Erweiterung aktiviert implizit die Erweiterung [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float), sofern sie unterstützt wird. Dadurch wird das Rendern in 16-Bit-Gleitkommaformate ermöglicht.

## Beispiele

```js
const ext = gl.getExtension("OES_texture_half_float");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, ext.HALF_FLOAT_OES, image);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_float_linear`](/de/docs/Web/API/OES_texture_float_linear)
- [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear)
