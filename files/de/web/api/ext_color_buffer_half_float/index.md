---
title: EXT_color_buffer_half_float-Erweiterung
short-title: EXT_color_buffer_half_float
slug: Web/API/EXT_color_buffer_half_float
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`EXT_color_buffer_half_float`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht das Rendern in 16-Bit-Gleitkomma-Farbpuffer.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Diese Erweiterung ist sowohl für [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2-Kontexte](/de/docs/Web/API/WebGL2RenderingContext) verfügbar. In WebGL 2 ist sie auf Plattformen, die 16-Bit-Gleitkomma-Renderziele, aber keine 32-Bit-Gleitkomma-Renderziele unterstützen, eine Alternative zur Erweiterung [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float).
>
> Die Erweiterung [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) aktiviert diese Erweiterung implizit.

## Konstanten

- `ext.RGBA16F_EXT`
  - : RGBA-Format mit 16-Bit-Gleitkommawerten, das als Farb-Renderziel verwendet werden kann.
- `ext.RGB16F_EXT`
  - : RGB-Format mit 16-Bit-Gleitkommawerten. In WebGL 1.0 kann es abhängig von der Implementierung als Farb-Renderziel verwendet werden. In WebGL 2.0 kann dieses Format nicht als Farb-Renderziel verwendet werden.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : Wird an [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) übergeben, um den Typ des Framebuffers abzufragen.
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : Der Framebuffer enthält vorzeichenlose Festkommakomponenten.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage):

- In WebGL-1.0-Kontexten akzeptiert der Parameter `internalFormat` nun `ext.RGBA16F_EXT` und `ext.RGB16F_EXT`. Die Unterstützung für `ext.RGB16F_EXT` ist jedoch optional. Anwendungen müssen daher prüfen, ob der Framebuffer vollständig ist, um festzustellen, ob das Format unterstützt wird.
- In WebGL-2.0-Kontexten akzeptiert der Parameter `internalFormat` nun `ext.RGBA16F_EXT`. Das Format `RGB16F` kann in WebGL 2.0 nicht als Farb-Renderziel verwendet werden.

Sie erweitert außerdem [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter):

- In WebGL-1.0-Kontexten akzeptiert der Parameter `pname` nun `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`. Wenn `attachment` den Wert `DEPTH_STENCIL_ATTACHMENT` und `pname` den Wert `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` hat, wird ein `INVALID_OPERATION`-Fehler ausgelöst. Wenn `pname` den Wert `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` hat, gibt `getFramebufferAttachmentParameter()` für Gleitkommakomponenten `gl.FLOAT` und für vorzeichenlose Festkommakomponenten `gl.UNSIGNED_NORMALIZED_EXT` zurück.

## Beispiele

```js
const ext = gl.getExtension("EXT_color_buffer_half_float");

gl.renderbufferStorage(gl.RENDERBUFFER, ext.RGBA16F_EXT, 256, 256);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
