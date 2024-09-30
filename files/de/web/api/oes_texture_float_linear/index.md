---
title: OES_texture_float_linear-Erweiterung
short-title: OES_texture_float_linear
slug: Web/API/OES_texture_float_linear
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_float_linear`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und erlaubt lineares Filterung mit Gleitkomma-Pixeltypen für Texturen.

WebGL-Erweiterungen sind verfügbar über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension). Für weitere Informationen sehen Sie auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch für {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Lineare Filterung

Die [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)-Erweiterung allein erlaubt keine lineare Filterung mit Gleitkomma-Texturen. Diese Erweiterung ermöglicht diese Fähigkeit.

Mit Hilfe dieser Erweiterung können Sie jetzt den Vergrößerungs- oder Verkleinerungsfilter in der Methode [`WebGLRenderingContext.texParameter()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) auf eines von `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Gleitkomma-Texturen verwenden.

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
