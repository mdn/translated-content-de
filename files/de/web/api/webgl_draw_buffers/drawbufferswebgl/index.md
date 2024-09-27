---
title: "WEBGL_draw_buffers: drawBuffersWEBGL()-Methode"
short-title: drawBuffersWEBGL()
slug: Web/API/WEBGL_draw_buffers/drawBuffersWEBGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_draw_buffers.drawBuffersWEBGL()`**-Methode ist Teil
der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen,
die Ausgabepuffer zu definieren, an die alle Fragmentfarben geschrieben werden.

Diese Methode ist Teil der [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) Erweiterung.

> [!NOTE]
> Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext)
> ist diese Methode standardmäßig als [`gl.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
> verfügbar, und die Konstanten sind als `gl.COLOR_ATTACHMENT1` usw. ohne das "WEBGL"-Suffix benannt.

## Syntax

```js-nolint
drawBuffersWEBGL(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von [`GLenum`](/de/docs/Web/API/WebGL_API/Types)-Konstanten, die Ausgabepuffer definieren.
    Mögliche Werte:

    - `gl.NONE`: Der Fragment-Shader wird nicht in einen Farbpuffer geschrieben.
    - `gl.BACK`: Der Fragment-Shader wird in den hinteren Farbpuffer geschrieben.
    - `ext.COLOR_ATTACHMENT0_WEBGL`: Der Fragment-Shader wird in den
      n-ten Farbanhang des Framebuffers geschrieben.
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

Siehe [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers) für mehr Kontext mit diesem Beispielcode.

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
- [WebGL deferred shading - Mozilla Hacks blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
