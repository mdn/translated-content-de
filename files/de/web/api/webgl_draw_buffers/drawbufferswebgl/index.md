---
title: "WEBGL_draw_buffers: drawBuffersWEBGL()-Methode"
short-title: drawBuffersWEBGL()
slug: Web/API/WEBGL_draw_buffers/drawBuffersWEBGL
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_draw_buffers.drawBuffersWEBGL()`**-Methode ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es Ihnen, die Zeichnungs-Puffer zu definieren, in die alle Fragmentfarben geschrieben werden.

Diese Methode ist Teil der {{domxref("WEBGL_draw_buffers")}}-Erweiterung.

> [!NOTE]
> Bei der Verwendung von {{domxref("WebGL2RenderingContext", "WebGL2")}}
> ist diese Methode standardmäßig als {{domxref("WebGL2RenderingContext.drawBuffers()", "gl.drawBuffers()")}}
> verfügbar und die Konstanten werden `gl.COLOR_ATTACHMENT1` usw. ohne das "WEBGL"-Suffix genannt.

## Syntax

```js-nolint
drawBuffersWEBGL(buffers)
```

### Parameter

- `buffers`

  - : Ein {{jsxref("Array")}} von {{domxref("WebGL_API/Types", "GLenum")}}-Konstanten, die die Zeichnungs-Puffer definieren.
    Mögliche Werte:

    - `gl.NONE`: Der Fragment-Shader wird nicht in einen Farb-Puffer geschrieben.
    - `gl.BACK`: Der Fragment-Shader wird in den hinteren Farb-Puffer geschrieben.
    - `ext.COLOR_ATTACHMENT0_WEBGL` Der Fragment-Shader wird in den
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

Siehe {{domxref("WEBGL_draw_buffers")}} für mehr Kontext mit diesem Beispielcode.

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

- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.framebufferRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.framebufferTexture2D()")}}
- {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- [WebGL Deferred Shading - Mozilla Hacks Blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
