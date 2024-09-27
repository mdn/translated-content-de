---
title: WEBGL_draw_buffers-Erweiterung
short-title: WEBGL_draw_buffers
slug: Web/API/WEBGL_draw_buffers
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_draw_buffers`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht es, einem Fragment-Shader in mehrere Texturen zu schreiben. Dies ist beispielsweise nützlich für das [Deferred Shading](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/).

WebGL-Erweiterungen sind mit der Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie im Abschnitt [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Diese Erweiterung ist nur für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}-Kontexte verfügbar. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} ist die Funktionalität dieser Erweiterung standardmäßig im WebGL2-Kontext verfügbar. In WebGL 2 sind die Konstanten ohne das "WEBGL"-Suffix verfügbar und die neuen GLSL-Built-ins erfordern GLSL `#version 300 es`.

## Konstanten

Diese Erweiterung stellt neue Konstanten bereit, die in den Methoden [`gl.framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer), [`gl.framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), [`gl.getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter), [`ext.drawBuffersWEBGL()`](/de/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL) und [`gl.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) verwendet werden können.

- `ext.COLOR_ATTACHMENT0_WEBGL`, `ext.COLOR_ATTACHMENT1_WEBGL`, `ext.COLOR_ATTACHMENT2_WEBGL`, `ext.COLOR_ATTACHMENT3_WEBGL`, `ext.COLOR_ATTACHMENT4_WEBGL`, `ext.COLOR_ATTACHMENT5_WEBGL`, `ext.COLOR_ATTACHMENT6_WEBGL`, `ext.COLOR_ATTACHMENT7_WEBGL`, `ext.COLOR_ATTACHMENT8_WEBGL`, `ext.COLOR_ATTACHMENT9_WEBGL`, `ext.COLOR_ATTACHMENT10_WEBGL`, `ext.COLOR_ATTACHMENT11_WEBGL`, `ext.COLOR_ATTACHMENT12_WEBGL`, `ext.COLOR_ATTACHMENT13_WEBGL`, `ext.COLOR_ATTACHMENT14_WEBGL`, `ext.COLOR_ATTACHMENT15_WEBGL`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), der einen Farb-Puffer spezifiziert.
- `ext.DRAW_BUFFER0_WEBGL`, `ext.DRAW_BUFFER1_WEBGL`, `ext.DRAW_BUFFER2_WEBGL`, `ext.DRAW_BUFFER3_WEBGL`, `ext.DRAW_BUFFER4_WEBGL`, `ext.DRAW_BUFFER5_WEBGL`, `ext.DRAW_BUFFER6_WEBGL`, `ext.DRAW_BUFFER7_WEBGL`, `ext.DRAW_BUFFER8_WEBGL ext.DRAW_BUFFER9_WEBGL`, `ext.DRAW_BUFFER10_WEBGL`, `ext.DRAW_BUFFER11_WEBGL`, `ext.DRAW_BUFFER12_WEBGL`, `ext.DRAW_BUFFER13_WEBGL`, `ext.DRAW_BUFFER14_WEBGL`, `ext.DRAW_BUFFER15_WEBGL`
  - : Ein [`GLenum`](/de/docs/Web/API/WebGL_API/Types), das einen Zeichnungs-Puffer zurückgibt.
- `ext.MAX_COLOR_ATTACHMENTS_WEBGL`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die maximale Anzahl von Rahmenpuffer-Farbanschlusspunkten angibt.
- `ext.MAX_DRAW_BUFFERS_WEBGL`
  - : Ein [`GLint`](/de/docs/Web/API/WebGL_API/Types), der die maximale Anzahl von Zeichnungs-Puffern angibt.

## Instanzmethoden

Diese Erweiterung stellt eine neue Methode bereit.

- [`ext.drawBuffersWEBGL()`](/de/docs/Web/API/WEBGL_draw_buffers/drawBuffersWEBGL)
  - : Definiert die Zeichnungs-Puffer, in die alle Fragment-Farben geschrieben werden. (Bei Verwendung von [`WebGL2`](/de/docs/Web/API/WebGL2RenderingContext) ist diese Methode standardmäßig als [`gl.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers) verfügbar).

## Beispiele

Aktivieren der Erweiterung:

```js
const ext = gl.getExtension("WEBGL_draw_buffers");
```

Mehrere Texturen (in einem `tx[]`-Array) an verschiedene Rahmenpuffer-Farbanbindungen binden:

```js
const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT0_WEBGL,
  gl.TEXTURE_2D,
  tx[0],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT1_WEBGL,
  gl.TEXTURE_2D,
  tx[1],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT2_WEBGL,
  gl.TEXTURE_2D,
  tx[2],
  0,
);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  ext.COLOR_ATTACHMENT3_WEBGL,
  gl.TEXTURE_2D,
  tx[3],
  0,
);
```

Zuordnung der Farb-Anbindungen zu Zeichnungs-Puffer-Slots, in die der Fragment-Shader unter Verwendung von `gl_FragData` schreiben wird:

```js
ext.drawBuffersWEBGL([
  ext.COLOR_ATTACHMENT0_WEBGL, // gl_FragData[0]
  ext.COLOR_ATTACHMENT1_WEBGL, // gl_FragData[1]
  ext.COLOR_ATTACHMENT2_WEBGL, // gl_FragData[2]
  ext.COLOR_ATTACHMENT3_WEBGL, // gl_FragData[3]
]);
```

Shader-Code, der in mehrere Texturen schreibt:

```html
<script type="x-shader/x-fragment">
  #extension GL_EXT_draw_buffers : require

  precision highp float;

  void main(void) {
    gl_FragData[0] = vec4(0.25);
    gl_FragData[1] = vec4(0.5);
    gl_FragData[2] = vec4(0.75);
    gl_FragData[3] = vec4(1.0);
  }
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGL2RenderingContext.drawBuffers()`](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers)
- [WebGL Deferred Shading - Mozilla Hacks Blog](https://hacks.mozilla.org/2014/01/webgl-deferred-shading/)
