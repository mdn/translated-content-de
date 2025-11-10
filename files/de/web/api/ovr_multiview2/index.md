---
title: OVR_multiview2-Erweiterung
short-title: OVR_multiview2
slug: Web/API/OVR_multiview2
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{APIRef("WebGL")}}

Die `OVR_multiview2`-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und fügt Unterstützung für das gleichzeitige Rendern in mehrere Ansichten hinzu. Dies ist besonders nützlich für Virtual Reality (VR) und WebXR.

Weitere Informationen finden Sie unter:

- [Multiview auf WebXR](https://error.ghost.org/)
- [Multiview in babylon.js](https://doc.babylonjs.com/features/featuresDeepDive/cameras/multiViewsPart1)
- [Optimierung der Virtual Reality: Verstehen von Multiview](https://developer.arm.com/community/arm-community-blogs/b/mobile-graphics-and-gaming-blog/posts/optimizing-virtual-reality-understanding-multiview)
- [Multiview WebGL-Rendering für Meta Quest](https://developers.meta.com/horizon/documentation/web/web-multiview/)

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Weitere Informationen finden Sie unter [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Leitfaden](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab (Windows+ANGLE und Android werden unterstützt; Windows+GL, Mac, Linux werden nicht unterstützt).
>
> Diese Erweiterung ist nur für [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar, da sie GLSL 3.00 und Texturarrays benötigt.
>
> Derzeit gibt es keine Möglichkeit, Multiview zum Rendern auf einen multisample backbuffer zu verwenden. Daher sollten Sie Kontexte mit `antialias: false` erstellen. Der Oculus-Browser (ab Version 6) unterstützt jedoch auch Multisampling mithilfe der [`OCULUS_multiview`](https://developers.meta.com/horizon/documentation/web/web-multiview/#using-oculus_multiview-in-webgl-20)-Erweiterung. Siehe auch [dieses WebGL-Problem](https://github.com/KhronosGroup/WebGL/issues/2912).

## Konstanten

Diese Erweiterung bietet 4 Konstanten, die in [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) verwendet werden können.

- `FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`
  - : Anzahl der Ansichten des Framebuffer-Objekt-Anhangs.
- `FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`
  - : Basis-Ansichtsindex des Framebuffer-Objekt-Anhangs.
- `MAX_VIEWS_OVR`
  - : Die maximale Anzahl von Ansichten. Die meisten VR-Headsets haben zwei Ansichten, aber es gibt Prototypen von Headsets mit ultra-weitem Sichtfeld, die 4 Ansichten verwenden, was derzeit die maximale von Multiview unterstützte Anzahl an Ansichten ist.
- `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`
  - : Wenn baseViewIndex nicht für alle Framebuffer-Anhangspunkte identisch ist, bei denen der Wert von `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` nicht `NONE` ist, wird der Framebuffer als unvollständig betrachtet. Der Aufruf von [`checkFramebufferStatus`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) für einen Framebuffer in diesem Zustand gibt `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR` zurück.

## Instanzmethoden

- [`framebufferTextureMultiviewOVR()`](/de/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
  - : Rendert gleichzeitig auf mehrere Elemente eines 2D-Texturarrays.

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

Sehen Sie auch dieses [three.js](https://threejs.org/examples/?q=mult#webgl_multiple_views)-Demo für ein Live-Multiview-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter)
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
