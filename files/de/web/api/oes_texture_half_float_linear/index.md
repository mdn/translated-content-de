---
title: OES_texture_half_float_linear Erweiterung
short-title: OES_texture_half_float_linear
slug: Web/API/OES_texture_half_float_linear
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("WebGL")}}

Die **`OES_texture_half_float_linear`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht lineare Filterung mit Halb-Float-Pixeltypen für Texturen.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung im WebGL2-Kontext standardmäßig verfügbar und die Erweiterung wird nicht benötigt.

## Lineare Filterung

Die {{domxref("OES_texture_half_float")}} Erweiterung allein erlaubt keine lineare Filterung mit Halb-Float-Texturen. Diese Erweiterung ermöglicht diese Fähigkeit.

Mit Hilfe dieser Erweiterung können Sie nun den Vergrößerungs- oder Verkleinerungsfilter in der {{domxref("WebGLRenderingContext.texParameter()")}} Methode auf eines von `gl.LINEAR`, `gl.LINEAR_MIPMAP_NEAREST`, `gl.NEAREST_MIPMAP_LINEAR` oder `gl.LINEAR_MIPMAP_LINEAR` setzen und Halb-Float-Texturen verwenden.

## Beispiele

```js
const halfFloat = gl.getExtension("OES_texture_half_float");
gl.getExtension("OES_texture_half_float_linear");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texParameterf(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  gl.RGBA,
  halfFloat.HALF_FLOAT_OES,
  image,
);
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
- {{domxref("OES_texture_half_float")}}
