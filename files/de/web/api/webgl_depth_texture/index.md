---
title: WEBGL_depth_texture Erweiterung
short-title: WEBGL_depth_texture
slug: Web/API/WEBGL_depth_texture
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebGL")}}

Die **`WEBGL_depth_texture`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und definiert 2D-Tiefen- und Tiefen-Stencil-Texturen.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstante in WebGL2 ist `gl.UNSIGNED_INT_24_8`.

## Konstanten

Diese Erweiterung fügt eine neue Konstante hinzu:

- `ext.UNSIGNED_INT_24_8_WEBGL`
  - : Unsigned Integer Typ für 24-Bit-Tiefentexturdaten.

## Erweiterte Methoden

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.texImage2D()")}}:

- Die Parameter `format` und `internalformat` akzeptieren jetzt `gl.DEPTH_COMPONENT` und `gl.DEPTH_STENCIL`.
- Der Parameter `type` akzeptiert jetzt `gl.UNSIGNED_SHORT`, `gl.UNSIGNED_INT` und `ext.UNSIGNED_INT_24_8_WEBGL`.
- Der Parameter `pixels` akzeptiert jetzt ein {{jsxref("Uint16Array")}} oder ein {{jsxref("Uint32Array")}} Objekt.

Diese Erweiterung erweitert {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}:

- Der Parameter `attachment` akzeptiert jetzt `gl.DEPTH_STENCIL_ATTACHMENT`.

## Beispiele

```js
const ext = gl.getExtension("WEBGL_depth_texture");

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.DEPTH_COMPONENT,
  512,
  512,
  0,
  gl.DEPTH_COMPONENT,
  gl.UNSIGNED_SHORT,
  null,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
