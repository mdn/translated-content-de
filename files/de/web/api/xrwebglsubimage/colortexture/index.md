---
title: "XRWebGLSubImage: colorTexture-Eigenschaft"
short-title: colorTexture
slug: Web/API/XRWebGLSubImage/colorTexture
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`colorTexture`**-Eigenschaft des [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Interfaces repräsentiert das Farb-`WebGLTexture`-Objekt für die [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer), um darauf zu rendern.

## Wert

Eine undurchsichtige [`WebGLTexture`](/de/docs/Web/API/WebGLTexture). Details finden Sie unter [WebXR undurchsichtige Texturen](/de/docs/Web/API/WebGLTexture#webxr_opaque_textures).

## Beispiele

### Verwendung von `colorTexture`

Die `colorTexture`-Eigenschaft kann an [`WebGL2RenderingContext.framebufferTextureLayer()`](/de/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer) übergeben werden, um die Farbtextur an einen Framebuffer anzuhängen.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({
  textureType: "texture-array",
});
const framebuffer = gl.createFramebuffer();

xrSession.updateRenderState({ layers: [layer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  const viewport = xrGlBinding.getSubImage(layer, xrFrame).viewport;
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  for (const view in xrViewerPose.views) {
    const subImage = xrGlBinding.getViewSubImage(layer, view);
    gl.framebufferTextureLayer(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      subImage.colorTexture,
      0,
      subImage.imageIndex,
    );
    gl.framebufferTextureLayer(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      subImage.depthStencilTexture,
      0,
      subImage.imageIndex,
    );

    // Render from the viewpoint of xrView
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGL2RenderingContext.framebufferTextureLayer()`](/de/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer)
