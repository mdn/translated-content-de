---
title: EXT_sRGB Erweiterung
short-title: EXT_sRGB
slug: Web/API/EXT_sRGB
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_sRGB`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt sRGB-Unterstützung zu Texturen und Framebuffer-Objekten hinzu.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} steht die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext zur Verfügung. Die Konstanten in WebGL2 sind: `gl.SRGB`, `gl.SRGB8`, `gl.SRGB8_ALPHA8` und `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`.

## Konstanten

Diese Erweiterung stellt die folgenden Konstanten bereit, die in den Methoden [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) und [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) verwendet werden können.

- `ext.SRGB_EXT`
  - : Ungerastertes sRGB-Format, das die Präzision dem Treiber überlässt.
- `ext.SRGB_ALPHA_EXT`
  - : Ungerastertes sRGB-Format mit ungerasterter Alphakomponente.
- `ext.SRGB8_ALPHA8_EXT`
  - : Gerasterte (8-Bit) sRGB- und Alpha-Formate.
- `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`
  - : Gibt die Framebuffer-Farbkodierung zurück (`gl.LINEAR` oder `ext.SRGB_EXT`).

## Beispiele

```js
const ext = gl.getExtension("EXT_sRGB");

const texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  ext.SRGB_EXT,
  512,
  512,
  0,
  ext.SRGB_EXT,
  gl.UNSIGNED_BYTE,
  image,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
