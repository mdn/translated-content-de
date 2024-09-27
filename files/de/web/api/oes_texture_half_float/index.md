---
title: OES_texture_half_float Erweiterung
short-title: OES_texture_half_float
slug: Web/API/OES_texture_half_float
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_half_float`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt Texturformate mit 16- (auch bekannt als Half Float) und 32-Bit Gleitkomma-Komponenten hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstante in WebGL2 ist `gl.HALF_FLOAT`.

## Konstanten

- `ext.HALF_FLOAT_OES`
  - : Half Floating-Point Typ (16-Bit).

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D):

- Der `type` Parameter akzeptiert jetzt `ext.HALF_FLOAT_OES`.

## Einschränkung: Lineares Filtern

Lineares Filtern auf Half Floating-Point Texturen ist mit dieser Erweiterung nicht erlaubt. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter in der [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) Methode auf einen von `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Half Floating-Point Texturen verwenden, wird die Textur als unvollständig markiert.

Um lineares Filtern auf Half Floating-Point Texturen zu verwenden, aktivieren Sie die [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear) Erweiterung zusätzlich zu dieser Erweiterung.

## Half Floating-Point Farb-Puffer

Diese Erweiterung aktiviert implizit die [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float) Erweiterung (sofern unterstützt), die das Rendern in 16-Bit Gleitkomma-Formate ermöglicht.

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
