---
title: EXT_texture_filter_anisotropic Erweiterung
short-title: EXT_texture_filter_anisotropic
slug: Web/API/EXT_texture_filter_anisotropic
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{APIRef("WebGL")}}

Die **`EXT_texture_filter_anisotropic`** Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten für [anisotropes Filtern (AF)](https://en.wikipedia.org/wiki/Anisotropic_filtering) bereit.

AF verbessert die Qualität der mipmapped Texturzugriffe, wenn ein Texturprimitiv in einem schrägen Winkel betrachtet wird. Bei der Verwendung von nur Mipmapping neigen diese Abfragen dazu, zu einem durchschnittlichen Grau zu führen.

WebGL-Erweiterungen sind mit der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist sowohl in [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexten verfügbar.

## Konstanten

- `ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT`
  - : Dies ist das `pname` Argument bei dem Aufruf von [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) und es gibt die maximal verfügbare Anisotropie zurück.
- `ext.TEXTURE_MAX_ANISOTROPY_EXT`
  - : Dies ist das `pname` Argument bei den Aufrufen von [`gl.getTexParameter()`](/de/docs/Web/API/WebGLRenderingContext/getTexParameter) und [`gl.texParameterf()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) / [`gl.texParameteri()`](/de/docs/Web/API/WebGLRenderingContext/texParameter) und legt die gewünschte maximale Anisotropie für eine Textur fest.

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
