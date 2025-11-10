---
title: EXT_color_buffer_half_float-Erweiterung
short-title: EXT_color_buffer_half_float
slug: Web/API/EXT_color_buffer_half_float
l10n:
  sourceCommit: 8745b31f3e08546a7561e94153b5788fbe1c9da6
---

{{APIRef("WebGL")}}

Die **`EXT_color_buffer_half_float`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und fügt die Möglichkeit hinzu, auf 16-Bit-Float-Farbpuffer zu rendern.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist in beiden Kontexten verfügbar, sowohl [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch [WebGL2](/de/docs/Web/API/WebGL2RenderingContext). Unter WebGL 2 ist sie eine Alternative zur Verwendung der [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)-Erweiterung auf Plattformen, die 16-Bit-Float-Renderziele unterstützen, aber keine 32-Bit-Float-Renderziele.
>
> Die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)-Erweiterung aktiviert implizit diese Erweiterung.

## Konstanten

- `ext.RGBA16F_EXT`
  - : RGBA 16-Bit-Float-Farb-renderbares Format.
- `ext.RGB16F_EXT`
  - : RGB 16-Bit-Float-Format. In WebGL 1.0 kann dies farb-renderbar sein (implementierungsabhängig). In WebGL 2.0 ist dieses Format nicht farb-renderbar.
- `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`
  - : Wird an [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) übergeben, um den Framebuffer-Typ zu erhalten.
- `ext.UNSIGNED_NORMALIZED_EXT`
  - : Der Framebuffer enthält unbezeichnete Festkomma-Komponenten.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.renderbufferStorage()`](/de/docs/Web/API/WebGLRenderingContext/renderbufferStorage):

- In WebGL 1.0-Kontexten akzeptiert der `internalFormat`-Parameter jetzt `ext.RGBA16F_EXT` und `ext.RGB16F_EXT`. Die Unterstützung von `ext.RGB16F_EXT` ist jedoch optional und Anwendungen müssen die Vollständigkeit des Framebuffers überprüfen, um festzustellen, ob es unterstützt wird.
- In WebGL 2.0-Kontexten akzeptiert der `internalFormat`-Parameter jetzt `ext.RGBA16F_EXT`. Das `RGB16F`-Format ist in WebGL 2.0 nicht farb-renderbar.

Sie erweitert [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter):

- In WebGL 1.0-Kontexten akzeptiert der `pname`-Parameter jetzt `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`. Ein `INVALID_OPERATION`-Fehler wird erzeugt, wenn `attachment` `DEPTH_STENCIL_ATTACHMENT` ist und `pname` `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT`. Wenn `pname` `ext.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` ist, gibt `getFramebufferAttachmentParameter()` entweder `gl.FLOAT` oder `gl.UNSIGNED_NORMALIZED_EXT` für Float- oder unbezeichnete Festkomma-Komponenten zurück.

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
