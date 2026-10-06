---
title: OVR_multiview2-Erweiterung
short-title: OVR_multiview2
slug: Web/API/OVR_multiview2
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebGL")}}

Die Erweiterung `OVR_multiview2` ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und ermöglicht das gleichzeitige Rendern in mehrere Ansichten. Dies ist besonders für Virtual Reality (VR) und WebXR nützlich.

Weitere Informationen finden Sie unter:

- [Multiview auf WebXR](https://error.ghost.org/)
- [Multiview in babylon.js](https://doc.babylonjs.com/features/featuresDeepDive/cameras/multiViewsPart1)
- [Virtual Reality optimieren: Multiview verstehen](https://developer.arm.com/community/arm-community-blogs/b/mobile-graphics-and-gaming-blog/posts/optimizing-virtual-reality-understanding-multiview)
- [Multiview-WebGL-Rendering für Meta Quest](https://developers.meta.com/vr/documentation/web/web-multiview/)

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab (Windows+ANGLE und Android werden unterstützt; Windows+GL, Mac und Linux werden nicht unterstützt).
>
> Diese Erweiterung ist nur für [WebGL-2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar, da sie GLSL 3.00 und Texture-Arrays benötigt.
>
> Derzeit gibt es keine Möglichkeit, mit Multiview in einen multisampled Backbuffer zu rendern. Erstellen Sie Kontexte daher mit `antialias: false`. Der Oculus-Browser (ab Version 6) unterstützt Multisampling jedoch auch über die Erweiterung [`OCULUS_multiview`](https://developers.meta.com/vr/documentation/web/web-multiview/#using-oculus_multiview-in-webgl-20). Siehe auch [diesen WebGL-Issue](https://github.com/KhronosGroup/WebGL/issues/2912).

## Konstanten

Diese Erweiterung stellt vier Konstanten bereit, die in [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) verwendet werden können.

- `FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`
  - : Anzahl der Ansichten des Framebuffer-Objekt-Anhangs.
- `FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`
  - : Basisansichtsindex des Framebuffer-Objekt-Anhangs.
- `MAX_VIEWS_OVR`
  - : Die maximale Anzahl von Ansichten. Die meisten VR-Headsets haben zwei Ansichten. Es gibt jedoch Prototypen von Headsets mit einem besonders großen Sichtfeld, die vier Ansichten verwenden. Dies ist derzeit die maximale von Multiview unterstützte Anzahl.
- `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`
  - : Wenn baseViewIndex nicht für alle Framebuffer-Anhangspunkte gleich ist, deren Wert für `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` nicht `NONE` ist, gilt der Framebuffer als unvollständig. Ein Aufruf von [`checkFramebufferStatus`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) für einen Framebuffer in diesem Zustand gibt `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR` zurück.

## Instanzmethoden

- [`framebufferTextureMultiviewOVR()`](/de/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
  - : Rendert gleichzeitig in mehrere Elemente eines 2D-Texture-Arrays.

## Beispiele

Dieses Beispiel stammt aus der [Spezifikation](https://registry.khronos.org/webgl/extensions/OVR_multiview2/).

```js
const gl = document
  .createElement("canvas")
  .getContext("webgl2", { antialias: false });
const ext = gl.getExtension("OVR_multiview2");
const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, fb);

const colorTex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D_ARRAY, colorTex);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.RGBA8, 512, 512, 2);
ext.framebufferTextureMultiviewOVR(
  gl.DRAW_FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  colorTex,
  0,
  0,
  2,
);

const depthStencilTex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D_ARRAY, depthStencilTex);
gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.DEPTH32F_STENCIL8, 512, 512, 2);

ext.framebufferTextureMultiviewOVR(
  gl.DRAW_FRAMEBUFFER,
  gl.DEPTH_STENCIL_ATTACHMENT,
  depthStencilTex,
  0,
  0,
  2,
);
gl.drawElements(/* … */); // draw will be broadcasted to the layers of colorTex and depthStencilTex.
```

Shader-Code

```glsl
#version 300 es
#extension GL_OVR_multiview2 : require
precision mediump float;
layout (num_views = 2) in;
in vec4 inPos;
uniform mat4 u_viewMatrices[2];
void main() {
  gl_Position = u_viewMatrices[gl_ViewID_OVR] * inPos;
}
```

Ein interaktives Multiview-Beispiel finden Sie auch in dieser [three.js-Demo](https://threejs.org/examples/?q=mult#webgl_multiple_views).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
