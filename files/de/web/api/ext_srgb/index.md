---
title: EXT_sRGB-Erweiterung
short-title: EXT_sRGB
slug: Web/API/EXT_sRGB
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGL")}}

Die **`EXT_sRGB`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt sRGB-Unterstützung für Texturen und Framebuffer-Objekte hinzu.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Für weitere Informationen siehe [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstanten in WebGL2 sind: `gl.SRGB`, `gl.SRGB8`, `gl.SRGB8_ALPHA8` und `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`.

## Konstanten

Diese Erweiterung stellt die folgenden Konstanten bereit, die in den Methoden {{domxref("WebGLRenderingContext.texImage2D()", "texImage2D()")}}, {{domxref("WebGLRenderingContext.texSubImage2D()", "texSubImage2D()")}}, {{domxref("WebGLRenderingContext.renderbufferStorage()", "renderbufferStorage()")}} und {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()", "getFramebufferAttachmentParameter()")}} verwendet werden können.

- `ext.SRGB_EXT`
  - : Nicht dimensioniertes sRGB-Format, das die Präzision dem Treiber überlässt.
- `ext.SRGB_ALPHA_EXT`
  - : Nicht dimensioniertes sRGB-Format mit nicht dimensionierter Alphakomponente.
- `ext.SRGB8_ALPHA8_EXT`
  - : Dimensionierte (8-Bit) sRGB- und Alpha-Formate.
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
