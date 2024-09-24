---
title: EXT_texture_filter_anisotropic Erweiterung
short-title: EXT_texture_filter_anisotropic
slug: Web/API/EXT_texture_filter_anisotropic
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_texture_filter_anisotropic`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten für das [anisotropische Filtern (AF)](https://en.wikipedia.org/wiki/Anisotropic_filtering) bereit.

AF verbessert die Qualität der mipmap-basierten Texturzugriffe, wenn ein texturiertes Primitive aus einem schrägen Winkel betrachtet wird. Beim alleinigen Einsatz von Mipmapping tendieren diese Abfragen dazu, sich zu einem Grauwert zu mitteln.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen lesen Sie bitte auch [Verwenden von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist in beiden Kontexten verfügbar, sowohl im {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch im {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontext.

## Konstanten

- `ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT`
  - : Dies ist das `pname` Argument für den Aufruf von {{domxref("WebGLRenderingContext.getParameter", "gl.getParameter()")}}, und es gibt die maximal verfügbare Anisotropie zurück.
- `ext.TEXTURE_MAX_ANISOTROPY_EXT`
  - : Dies ist das `pname` Argument für die Aufrufe von {{domxref("WebGLRenderingContext.getTexParameter", "gl.getTexParameter()")}} und {{domxref("WebGLRenderingContext.texParameter", "gl.texParameterf()")}} / {{domxref("WebGLRenderingContext.texParameter", "gl.texParameteri()")}} und legt die gewünschte maximale Anisotropie für eine Textur fest.

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

- {{domxref("WebGLRenderingContext.getExtension()")}}
