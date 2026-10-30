---
title: "WEBGL_draw_buffers: Methode drawBuffersWEBGL()"
short-title: drawBuffersWEBGL()
slug: Web/API/WEBGL_draw_buffers/drawBuffersWEBGL
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Methode **`WEBGL_draw_buffers.drawBuffersWEBGL()`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, die Zeichenpuffer festzulegen, in die alle Fragmentfarben geschrieben werden.

Diese Methode ist Teil der Erweiterung [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers) verfügbar. Die Konstanten heißen `gl.COLOR_ATTACHMENT1` usw., ohne das Suffix „WEBGL“.

## Syntax

```js-nolint
drawBuffersWEBGL(buffers)
```

### Parameter

- `buffers`
  - : Ein {{jsxref("Array")}} aus [`GLenum`](/de/docs/Web/API/WebGL_API/Types)-Konstanten, die die Zeichenpuffer festlegen.
    Mögliche Werte:
    - `gl.NONE`: Der Fragment-Shader schreibt in keinen Farbpuffer.
    - `gl.BACK`: Der Fragment-Shader schreibt in den hinteren Farbpuffer.
    - `ext.COLOR_ATTACHMENT0_WEBGL`: Der Fragment-Shader schreibt in den n-ten Farb-Anhang des Framebuffers.
    - `ext.COLOR_ATTACHMENT1_WEBGL`
    - `ext.COLOR_ATTACHMENT2_WEBGL`
    - `ext.COLOR_ATTACHMENT3_WEBGL`
    - `ext.COLOR_ATTACHMENT4_WEBGL`
    - `ext.COLOR_ATTACHMENT5_WEBGL`
    - `ext.COLOR_ATTACHMENT6_WEBGL`
    - `ext.COLOR_ATTACHMENT7_WEBGL`
    - `ext.COLOR_ATTACHMENT8_WEBGL`
    - `ext.COLOR_ATTACHMENT9_WEBGL`
    - `ext.COLOR_ATTACHMENT10_WEBGL`
    - `ext.COLOR_ATTACHMENT11_WEBGL`
    - `ext.COLOR_ATTACHMENT12_WEBGL`
    - `ext.COLOR_ATTACHMENT13_WEBGL`
    - `ext.COLOR_ATTACHMENT14_WEBGL`
    - `ext.COLOR_ATTACHMENT15_WEBGL`

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Weitere Erläuterungen zu diesem Beispielcode finden Sie unter [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).

```js
ext.drawBuffersWEBGL([
  ext.COLOR_ATTACHMENT0_WEBGL, // gl_FragData[0]
  ext.COLOR_ATTACHMENT1_WEBGL, // gl_FragData[1]
  ext.COLOR_ATTACHMENT2_WEBGL, // gl_FragData[2]
  ext.COLOR_ATTACHMENT3_WEBGL, // gl_FragData[3]
]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer)
- [`WebGLRenderingContext.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D)
- [`WebGLRenderingContext.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
- [WebGL Deferred Shading – Mozilla-Hacks-Blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
