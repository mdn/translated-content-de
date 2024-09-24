---
title: OES_texture_half_float-Erweiterung
short-title: OES_texture_half_float
slug: Web/API/OES_texture_half_float
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_half_float`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt Texturformate mit 16- (auch als Half-Float bekannt) und 32-Bit-Gleitkomponenten hinzu.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstante in WebGL2 ist `gl.HALF_FLOAT`.

## Konstanten

- `ext.HALF_FLOAT_OES`
  - : Half-Float-Datentyp (16-Bit).

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.texImage2D()")}} und {{domxref("WebGLRenderingContext.texSubImage2D()")}}:

- Der `type`-Parameter akzeptiert nun `ext.HALF_FLOAT_OES`.

## Einschränkung: Lineares Filtern

Lineares Filtern auf Half-Float-Texturen ist mit dieser Erweiterung nicht erlaubt. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter in der Methode {{domxref("WebGLRenderingContext.texParameter()")}} auf einen der folgenden Werte setzen: `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR`, und Half-Float-Texturen verwenden, wird die Textur als unvollständig markiert.

Um lineares Filtern auf Half-Float-Texturen zu verwenden, aktivieren Sie die {{domxref("OES_texture_half_float_linear")}}-Erweiterung zusätzlich zu dieser Erweiterung.

## Half-Float-Farbpuffer

Diese Erweiterung aktiviert implizit die {{domxref("EXT_color_buffer_half_float")}}-Erweiterung (falls unterstützt), die das Rendern auf 16-Bit-Float-Formate ermöglicht.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float_linear")}}
