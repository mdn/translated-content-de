---
title: OVR_multiview2-Erweiterung
short-title: OVR_multiview2
slug: Web/API/OVR_multiview2
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebGL")}}

Die `OVR_multiview2`-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und ermöglicht das gleichzeitige Rendern in mehrere Ansichten. Dies ist besonders nützlich für Virtual Reality (VR) und WebXR.

Für weitere Informationen siehe auch:

- [Multiview auf WebXR](https://error.ghost.org/)
- [Multiview in babylon.js](https://doc.babylonjs.com/features/featuresDeepDive/cameras/multiViewsPart1)
- [Optimierung der virtuellen Realität: Verständnis von Multiview](https://community.arm.com/arm-community-blogs/b/graphics-gaming-and-vr-blog/posts/optimizing-virtual-reality-understanding-multiview)
- [Multiview WebGL Rendering für Meta Quest](https://developers.meta.com/horizon/documentation/web/web-multiview/)

WebGL-Erweiterungen sind mit der Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Die Unterstützung hängt vom Grafiktreiber des Systems ab (Windows+ANGLE und Android werden unterstützt; Windows+GL, Mac, Linux werden nicht unterstützt).
>
> Diese Erweiterung ist nur für {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}}-Kontexte verfügbar, da sie GLSL 3.00 und Texturarrays benötigt.
>
> Derzeit gibt es keine Möglichkeit, Multiview zu verwenden, um in einen multisample backbuffer zu rendern. Daher sollten Sie Kontexte mit `antialias: false` erstellen. Der Oculus-Browser (6+) unterstützt jedoch auch Multisampling mit der [`OCULUS_multiview`](https://developers.meta.com/horizon/documentation/web/web-multiview/#using-oculus_multiview-in-webgl-20) Erweiterung. Siehe auch [dieses WebGL-Problem](https://github.com/KhronosGroup/WebGL/issues/2912).

## Konstanten

Diese Erweiterung stellt 4 Konstanten zur Verfügung, die in [`getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) verwendet werden können.

- `FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR`
  - : Anzahl der Ansichten des Framebuffer-Objektanhangs.
- `FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR`
  - : Basisansichtindex des Framebuffer-Objektanhangs.
- `MAX_VIEWS_OVR`
  - : Die maximale Anzahl von Ansichten. Die meisten VR-Headsets haben zwei Ansichten, aber es gibt Prototypen von Headsets mit einem ultraweiten sichtbaren Bereich, die 4 Ansichten verwenden, was derzeit die maximale Anzahl von Ansichten ist, die von Multiview unterstützt wird.
- `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR`
  - : Wenn der baseViewIndex nicht für alle Framebuffer-Anhangspunkte gleich ist, bei denen der Wert von `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE` nicht `NONE` ist, wird der Framebuffer als unvollständig betrachtet. Der Aufruf von [`checkFramebufferStatus`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) für einen Framebuffer in diesem Zustand gibt `FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR` zurück.

## Instanzmethoden

- [`framebufferTextureMultiviewOVR()`](/de/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
  - : Rendert gleichzeitig zu mehreren Elementen eines 2D-Texturarrays.

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

Shadercode

```cpp
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

Sehen Sie sich auch dieses [three.js](https://threejs.org/examples/?q=mult#webgl_multiple_views) Demo für ein Live-Multiview-Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- [WebXR](/de/docs/Web/API/WebXR_Device_API)
