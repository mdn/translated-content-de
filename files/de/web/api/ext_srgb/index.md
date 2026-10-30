---
title: EXT_sRGB-Erweiterung
short-title: EXT_sRGB
slug: Web/API/EXT_sRGB
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_sRGB`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ergänzt Texturen und Framebuffer-Objekte um sRGB-Unterstützung.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist nur in [WebGL1](/de/docs/Web/API/WebGLRenderingContext)-Kontexten verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist ihre Funktionalität standardmäßig im WebGL2-Kontext verfügbar. Die Konstanten in WebGL2 lauten: `gl.SRGB`, `gl.SRGB8`, `gl.SRGB8_ALPHA8` und `gl.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING`.

## Konstanten

Diese Erweiterung stellt die folgenden Konstanten bereit, die in den Methoden [`texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D), [`texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D), [`renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage) und [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) verwendet werden können.

- `ext.SRGB_EXT`
  - : sRGB-Format ohne festgelegte Größe, bei dem die Genauigkeit dem Treiber überlassen bleibt.
- `ext.SRGB_ALPHA_EXT`
  - : sRGB-Format ohne festgelegte Größe mit einer Alpha-Komponente ohne festgelegte Größe.
- `ext.SRGB8_ALPHA8_EXT`
  - : sRGB- und Alpha-Formate mit festgelegter Größe (8 Bit).
- `ext.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT`
  - : Gibt die Farbkodierung des Framebuffers zurück (`gl.LINEAR` oder `ext.SRGB_EXT`).

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
