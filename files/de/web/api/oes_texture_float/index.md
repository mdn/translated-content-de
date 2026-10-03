---
title: OES_texture_float-Erweiterung
short-title: OES_texture_float
slug: Web/API/OES_texture_float
l10n:
  sourceCommit: 3df8fd2961a7eb4b7072c3b34c5d6300e421fe22
---

{{APIRef("WebGL")}}

Die **`OES_texture_float`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt Gleitkomma-Pixeltypen für Texturen bereit.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) sind Gleitkomma-Texturformate und der Texturdatentyp `gl.FLOAT` standardmäßig verfügbar (dabei müssen Sie ein internes Format mit festgelegter Größe wie `gl.RGBA32F` verwenden).
>
> In WebGL 2 benötigen Sie weiterhin Erweiterungen, damit eine Gleitkomma-Textur als Farbpuffer gerendert werden kann: Verwenden Sie die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) für Gleitkomma-Farbpuffer oder [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float), wenn 16-Bit-Gleitkomma-Renderziele unterstützt werden, 32-Bit-Gleitkomma-Renderziele jedoch nicht.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D):

- Der Parameter `type` akzeptiert nun `gl.FLOAT`.
- Der Parameter `pixels` akzeptiert nun ein {{jsxref("Float32Array")}}.

## Einschränkung: Lineare Filterung

Diese Erweiterung erlaubt keine lineare Filterung von Gleitkomma-Texturen. Wenn Sie bei Verwendung von Gleitkomma-Texturen den Vergrößerungs- oder Verkleinerungsfilter mit der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen, wird die Textur als unvollständig markiert.

Um Gleitkomma-Texturen linear zu filtern, aktivieren Sie zusätzlich zu dieser Erweiterung die Erweiterung [`OES_texture_float_linear`](/de/docs/Web/API/OES_texture_float_linear).

## Gleitkomma-Farbpuffer

In WebGL 1 aktiviert diese Erweiterung implizit die Erweiterung [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float) (sofern unterstützt), die das Rendern in 32-Bit-Gleitkomma-Farbpuffer ermöglicht.

Verwenden Sie in WebGL 2 stattdessen die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) für Gleitkomma-Farbpuffer.

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
