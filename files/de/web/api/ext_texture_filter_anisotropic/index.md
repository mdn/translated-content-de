---
title: EXT_texture_filter_anisotropic-Erweiterung
short-title: EXT_texture_filter_anisotropic
slug: Web/API/EXT_texture_filter_anisotropic
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_texture_filter_anisotropic`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten für die [anisotrope Filterung (AF)](https://en.wikipedia.org/wiki/Anisotropic_filtering) bereit.

AF verbessert die Qualität des Zugriffs auf Texturen mit Mipmaps, wenn ein texturiertes Primitiv aus einem schrägen Winkel betrachtet wird. Bei ausschließlicher Verwendung von Mipmapping neigen diese Texturabfragen dazu, Grauwerte zu liefern.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch in [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexten verfügbar.

## Konstanten

- `ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT`
  - : Wird als `pname`-Argument beim Aufruf von [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet und gibt den höchsten verfügbaren Anisotropiegrad zurück.
- `ext.TEXTURE_MAX_ANISOTROPY_EXT`
  - : Wird als `pname`-Argument bei Aufrufen von [`gl.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter) sowie [`gl.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) / [`gl.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) verwendet und legt den gewünschten maximalen Anisotropiegrad für eine Textur fest.

## Beispiele

```js
const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);
const ext =
  gl.getExtension("EXT_texture_filter_anisotropic") ||
  gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
  gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
if (ext) {
  const max = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
  gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, max);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
