---
title: WEBGL_depth_texture Erweiterung
short-title: WEBGL_depth_texture
slug: Web/API/WEBGL_depth_texture
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{APIRef("WebGL")}}

Die **`WEBGL_depth_texture`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und definiert 2D-Tiefen- und Tiefen-Stencil-Texturen.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie auch unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) Kontexte verfügbar. In [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. Die Konstante in WebGL2 ist `gl.UNSIGNED_INT_24_8`.

## Konstanten

Diese Erweiterung fügt eine neue Konstante hinzu:

- `ext.UNSIGNED_INT_24_8_WEBGL`
  - : Unsigned Integer Typ für 24-Bit-Tiefentexturdaten.

## Erweiterte Methoden

Diese Erweiterung erweitert [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D):

- Die Parameter `format` und `internalformat` akzeptieren nun `gl.DEPTH_COMPONENT` und `gl.DEPTH_STENCIL`.
- Der Parameter `type` akzeptiert nun `gl.UNSIGNED_SHORT`, `gl.UNSIGNED_INT` und `ext.UNSIGNED_INT_24_8_WEBGL`.
- Der Parameter `pixels` akzeptiert nun ein {{jsxref("Uint16Array")}} oder ein {{jsxref("Uint32Array")}} Objekt.

Diese Erweiterung erweitert [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D):

- Der Parameter `attachment` akzeptiert nun `gl.DEPTH_STENCIL_ATTACHMENT`.

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

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D)
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
