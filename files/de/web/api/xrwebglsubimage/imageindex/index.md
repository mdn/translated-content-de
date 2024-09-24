---
title: "XRWebGLSubImage: imageIndex-Eigenschaft"
short-title: imageIndex
slug: Web/API/XRWebGLSubImage/imageIndex
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`imageIndex`**-Eigenschaft des {{domxref("XRWebGLSubImage")}}-Interfaces ist eine Zahl, die den Versatz in das Texturarray darstellt, wenn die Ebene mit `texture-array` angefordert wurde; [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) andernfalls.

## Wert

Eine Zahl oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), wenn die Ebene nicht mit `texture-array` angefordert wurde.

### Verwendung von `imageIndex`

Die `imageIndex`-Eigenschaft kann an {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}} übergeben werden, um die Tiefen- und Farbtexturen mit dem korrekten Ebenenindex an einen Framebuffer anzuhängen.

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

- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
