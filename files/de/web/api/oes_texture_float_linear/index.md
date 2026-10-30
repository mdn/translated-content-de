---
title: OES_texture_float_linear-Erweiterung
short-title: OES_texture_float_linear
slug: Web/API/OES_texture_float_linear
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`OES_texture_float_linear`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht die lineare Filterung von Texturen mit Gleitkomma-Pixeltypen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar.

## Lineare Filterung

Die Erweiterung [`OES_texture_float`](/de/docs/Web/API/OES_texture_float) allein ermöglicht keine lineare Filterung von Gleitkomma-Texturen. Diese Erweiterung fügt diese Möglichkeit hinzu.

Mit dieser Erweiterung können Sie den Vergrößerungs- oder Verkleinerungsfilter in der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Gleitkomma-Texturen verwenden.

## Beispiele

```js
gl.getExtension("OES_texture_float");
gl.getExtension("OES_texture_float_linear");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
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
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear)
