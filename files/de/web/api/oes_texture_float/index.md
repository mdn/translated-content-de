---
title: OES_texture_float-Erweiterung
short-title: OES_texture_float
slug: Web/API/OES_texture_float
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_texture_float`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt Gleitkomma-Pixeltypen für Texturen bereit.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexten verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) sind Gleitkomma-Texturformate und der Texturdatentyp `gl.FLOAT` standardmäßig verfügbar (wobei Sie ihn mit einem internen Format mit festgelegter Größe wie `gl.RGBA32F` kombinieren müssen).
>
> In WebGL 2 benötigen Sie weiterhin Erweiterungen, um eine Gleitkomma-Textur als Farb-Renderziel verwenden zu können: Verwenden Sie die Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float) für Gleitkomma-Farbpuffer oder [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float), wenn 16-Bit-Gleitkomma-Renderziele unterstützt werden, 32-Bit-Gleitkomma-Renderziele jedoch nicht.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D):

- Der Parameter `type` akzeptiert nun `gl.FLOAT`.
- Der Parameter `pixels` akzeptiert nun ein {{jsxref("Float32Array")}}.

## Einschränkung: Lineare Filterung

Diese Erweiterung erlaubt keine lineare Filterung von Gleitkomma-Texturen. Wenn Sie den Vergrößerungs- oder Verkleinerungsfilter mit der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Gleitkomma-Texturen verwenden, wird die Textur als unvollständig markiert.

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
